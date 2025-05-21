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
          <h1 className="text-3xl font-semibold text-purple-300 border-b pb-2 border-gray">Projects</h1>

          {[ 
            {
              title: "Fleet Structure Optimization",
              bullets: [
                "Developed a multi-objective optimization algorithm integrating TOPSIS with NSGA-II to minimize fleet costs and carbon emissions over a 16-year horizon.",
                "Achieved a 28.37% reduction in total cost and 39.95% lower emissions compared to vanilla NSGA-II algorithm.",
                "Reduced runtime by 36.2% using Python multiprocessing after parallelizing the algorithm."
              ],
              githubLink: "https://github.com/yashyaks/FleetStructureOptimization"
            },
            {
              title: "AirViz - Big Data Pipeline",
              bullets: [
                "Developed a data pipeline for ETL to transfer data from Amazon RDS (PostgreSQL engine) to an AWS Redshift data warehouse using AWS Glue and a spark runtime in AWS.",
                "Visualized airline flight schedules, airport connections, and airline delays and cancellations using PowerBI."
              ],
              githubLink: "https://github.com/yashyaks/Flight-Data-Analysis"
            },
            {
              title: "Hybrid Quantum-Classical CNN for Audio Classification",
              bullets: [
                "Developed a QC-CNN architecture using the Qiskit Machine Learning library to perform audio classification using an explainable mel-spectrogram approach on different dataset sizes.",
                "Compared performance with classical models."
              ],
              githubLink: "https://github.com/yashyaks/Audio-QC-CNN"
            },
            {
              title: "Olist’s E-commerce Insights",
              bullets: [
                "Unveiled insights and trends from the Olist data and derived customer segments using RFM analysis.",
                "Developed ML models for customer segmentation, sales prediction, churn classification, and sentiment analysis."
              ],
              githubLink: "https://github.com/yashyaks/ecommerce-insights"
            },
            // {
            //   title: "Phishing Detector",
            //   bullets: [
            //     "Developed a neural-network-based Phishing Link Detection model that uses 111 features, DNS data, and queries whois data for accurate link classification.",
            //     "Conducted image similarity analysis to examine lookalike website structures."
            //   ],
            //   githubLink: "https://github.com/yourusername/phishing-detector"
            // },
            // {
            //   title: "PJM Regional Electricity Consumption - Time Series Modeling",
            //   bullets: [
            //     "Researched the efficacy of time series models like ARIMA, SARIMA, GARCH, VAR, and CNN models for power consumption analysis.",
            //     "Uncovered trends and factors for energy policy and resource optimization."
            //   ],
            //   githubLink: "https://github.com/yourusername/pjm-regional-electricity-consumption"
            // }
          ].map((project, idx) => (
            <section
              key={idx}
              className="bg-black border-b border-gray py-5 shadow-md"
            >
              <h2 className="text-xl font-semibold text-white mb-3">{project.title}</h2>
              <ul className="list-disc ml-5 text-white space-y-2">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-white bg-blue font-medium border-2 border-blue hover:bg-blue hover:border-2 hover:border-white transition duration-300 py-2 px-4 rounded-lg"
              >
                View on GitHub
              </a>
            </section>
          ))}
        </main>


      </div>
      <Footer/>
    </>
  );
}
