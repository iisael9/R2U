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
  { title: "Sales tax reconciliation and filing", description: "Reconcile and file sales tax accurately." },
  { title: "Payroll live/after the fact", description: "Process payroll in real-time or retrospectively." },
  { title: "Budgeting and forecasting", description: "Develop accurate budgets and financial forecasts." },
  { title: "Year-end review/adjustments", description: "Conduct year-end reviews and make necessary adjustments." },
  { title: "Credit control", description: "Monitor and manage credit control processes effectively." },
  { title: "Accounts payable", description: "Track and manage amounts owed to suppliers." },
  { title: "Accounts receivable", description: "Manage and monitor amounts owed by customers." },
  { title: "Bank reconciliation", description: "Reconcile bank statements with financial records." },
  { title: "Credit card reconciliation", description: "Match credit card transactions with records." },
  { title: "AP/AR tracking", description: "Track accounts payable and accounts receivable effectively." },
  { title: "Match tax returns", description: "Ensure accurate matching of tax returns." },
  { title: "Financial review & analysis", description: "Perform in-depth reviews and analyses of financial data." },
  { title: "Match cash transaction entries", description: "Reconcile and match all cash transactions." },
  { title: "Profit and loss statement", description: "Prepare accurate profit and loss statements." },
  { title: "Balance sheet statement", description: "Generate detailed balance sheet statements." },
  { title: "Cash flow statement", description: "Track and monitor cash flow across your business." },
  { title: "Financial reports (as sought by CPA)", description: "Prepare financial reports required by CPAs." },
  { title: "Vendor payment scheduling", description: "Schedule and manage vendor payments." },
  { title: "1099 report preparation", description: "Prepare 1099 reports accurately and on time." },
  { title: "1099 E filing", description: "File 1099 forms electronically with ease." },
  { title: "HST calculation and filing", description: "Accurately calculate and file HST." },
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
    <div className="container mx-auto py-12 px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Section: Title and Description */}
    <div className="flex flex-col max-w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
        <span className="flex items-center whitespace-nowrap">
          <Image
            src="/qb.svg"
            alt="QuickBooks Logo"
            width={50} // Adjust logo size dynamically
            height={50}
            className="mr-4"
          />
          Highly <span className="ml-2 text-purple-500">reliable</span>
        </span>
        <span className="block">bookkeeping outsourcing service</span>
      </h1>

      <p className="text-base sm:text-lg text-muted-foreground">
        We cover all aspects of bookkeeping and accounting services for CPAs, businesses, and accounting firms. We
        have been offering remote bookkeeping services. We have extensive expertise across multiple industries and business types.
      </p>
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
  );
}
