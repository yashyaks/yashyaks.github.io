import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaHashnode } from "react-icons/fa6";
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Hero() {
  return (
    <>
      <Navbar/>
      <div className="max-w-[80rem] font-Poppins w-full mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col lg:flex-row">
        <Sidebar/>
        <main className="border-2 rounded-lg border-gray w-full lg:w-3/4 p-4 sm:p-8">
          <h1 className="border-b-2 border-b-gray text-2xl font-semibold sm:text-3xl mb-6">
            Projects
          </h1>

          <section>
            <h2 className="text-xl font-semibold mb-4">AirViz - Big Data Pipeline</h2>
            <ul className="ml-5 mb-6 list-disc">
              <li>Developed a data pipeline for ETL to transfer data from Amazon RDS (PostgreSQL engine) to an AWS Redshift data warehouse using AWS Glue and a spark runtime in AWS.</li>
              <li>Visualized airline flight schedules, airport connections, and airline delays and cancellations using PowerBI.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Olist’s E-commerce Insights</h2>
            <ul className="ml-5 mb-6 list-disc">
              <li>Unveiled insights and trends from the Olist data and derived customer segments using RFM analysis.</li>
              <li>Developed ML models for customer segmentation, sales prediction, churn classification, and sentiment analysis.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Phishing Detector</h2>
            <ul className="ml-5 mb-6 list-disc">
              <li>Developed a neural-network-based Phishing Link Detection model that uses 111 features, DNS data, and queries whois data for accurate link classification.</li>
              <li>Conducted image similarity analysis to examine lookalike website structures.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">PJM Regional Electricity Consumption - Time Series Modeling</h2>
            <ul className="ml-5 mb-6 list-disc">
              <li>Researched the efficacy of time series models like ARIMA, SARIMA, GARCH, VAR, and CNN models for power consumption analysis.</li>
              <li>Uncovered trends and factors for energy policy and resource optimization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Hybrid Quantum-Classical CNN for Audio Classification</h2>
            <ul className="ml-5 mb-6 list-disc">
              <li>Developed a QC-CNN architecture using the Qiskit Machine Learning library to perform audio classification using an explainable mel-spectrogram approach on different dataset sizes.</li>
              <li>Compared performance with classical models.</li>
            </ul>
          </section>

        </main>
      </div>
      <Footer/>
    </>
  );
}
