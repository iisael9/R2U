"use client";
import React, { useState } from "react";
import Image from "next/image";

type Item = {
  title: string;
  description: string;
};

const items: Item[] = [
  { title: "Income entries", description: "Manage and record all income-related entries." },
  { title: "Expense entries", description: "Handle and track all expense-related transactions." },
  { title: "Custom financial reports", description: "Generate customized financial reports tailored to your needs." },
  { title: "Invoicing or billing", description: "Create and manage invoices or bills efficiently." },
  { title: "Correct errors and adjust entries", description: "Fix errors and make adjustments to financial entries." },
  { title: "Payroll live/after the fact", description: "Process payroll in real-time or retrospectively." },
  { title: "Budgeting and forecasting", description: "Develop accurate budgets and financial forecasts." },
  { title: "Year-end review/adjustments", description: "Conduct year-end reviews and make necessary adjustments." },
  { title: "Credit control", description: "Monitor and manage credit control processes effectively." },
  { title: "Accounts payable", description: "Track and manage amounts owed to suppliers." },
  { title: "Accounts receivable", description: "Manage and monitor amounts owed by customers." },
  { title: "Bank reconciliation", description: "Reconcile bank statements with financial records." },
  { title: "Credit card reconciliation", description: "Match credit card transactions with records." },
  { title: "AP/AR tracking", description: "Track accounts payable and accounts receivable effectively." },
  { title: "Financial review & analysis", description: "Perform in-depth reviews and analyses of financial data." },
  { title: "Match cash transaction entries", description: "Reconcile and match all cash transactions." },
  { title: "Profit and loss statement", description: "Prepare accurate profit and loss statements." },
  { title: "Balance sheet statement", description: "Generate detailed balance sheet statements." },
  { title: "Cash flow statement", description: "Track and monitor cash flow across your business." },
  { title: "Financial reports (as sought by CPA)", description: "Prepare financial reports required by CPAs." },
  { title: "Vendor payment scheduling", description: "Schedule and manage vendor payments." },
];

export default function ServicesPage() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Global Background */}
      <div className="absolute inset-0 -z-10 h-full w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        {/* Radial gradient */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Title and Description */}
          <div className="flex flex-col max-w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="flex items-center whitespace-nowrap">
                <Image
                  src="/qb.svg"
                  alt="QuickBooks Logo"
                  width={50}
                  height={50}
                  className="mr-4"
                />
                Highly <span className="ml-2 text-purple-500">reliable</span>
              </span>
              <span className="block">bookkeeping outsourcing service</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-4">
              We cover a wide variety of bookkeeping and accounting services for small businesses, and entrepreneurs.
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-4 md:mt-6">
              <a
                href="/contact"
                className="bg-purple-500 text-white text-sm sm:text-lg font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-purple-600 transition w-full sm:w-auto text-center"
              >
                Connect with a Consultant
              </a>
            </div>
          </div>

          {/* Right Section: List of Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <span className="text-purple-500 text-xl">✔</span>
                <span className="text-sm sm:text-base">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-background w-full max-w-md p-6 rounded-lg shadow-lg relative">
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-foreground">{selectedItem.title}</h2>
              <hr className="mb-4 border-muted-foreground" />
              <p className="text-gray-700 dark:text-muted-foreground">{selectedItem.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
