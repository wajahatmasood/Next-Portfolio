'use client';
import { useState } from 'react';
import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiArrowUp, FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  const isGerman = language === 'de';

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'de' : 'en'));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <SectionTitle>{isGerman ? 'Über mich' : 'About Me'}</SectionTitle>
        {/* Stylish toggle button */}
        <div className="bg-gray-200 rounded-full p-1 flex items-center">
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
              language === 'en' ? 'bg-blue-500 text-white' : 'text-gray-700'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('de')}
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
              language === 'de' ? 'bg-blue-500 text-white' : 'text-gray-700'
            }`}
          >
            Deutsch
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            {isGerman
              ? `Hallo, ich bin Wajahat Masood, ein engagierter Test Engineer mit über 3 Jahren Erfahrung in manuellen und automatisierten Tests für Gaming-, Mobile-Apps-, CMS- und Unternehmensplattformen. Ich habe an hochkarätigen Projekten wie American Express @WORKS und dem ERP-Portal von McKinsey Saudi-Arabien mitgewirkt und dabei zur Sicherstellung von Produktqualität, Leistung und Skalierbarkeit beigetragen. Mit fundierten Kenntnissen in Tools wie Selenium und JIRA bin ich spezialisiert auf Testplanung, -durchführung sowie die enge Zusammenarbeit mit cross-funktionalen Teams, um fehlerfreie und benutzerfreundliche Software bereitzustellen.`
              : `Hi, I’m Wajahat Masood, a dynamic Test Engineer with over 3 years of experience in manual and automated testing across gaming, mobile apps, CMS platforms, and enterprise systems. I’ve contributed to high-impact projects such as American Express @WORKS and McKinsey’s Saudi ERP Portal, where I ensured product quality, performance, and reliability at scale. Proficient in tools like Selenium and JIRA, I specialize in test planning, execution, and cross-functional collaboration to deliver seamless user experiences while reducing defects by up to 30%.`}
          </p>

          <Button className="mt-5">{isGerman ? 'Lebenslauf herunterladen' : 'Download CV'}</Button>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {[
            ['Backend Testing', 'Backend-Tests', 'blue'],
            ['Frontend Testing', 'Frontend-Tests', 'amber'],
            ['Mobile App Testing', 'Mobile-App-Tests', 'rose'],
            ['UI/UX Testing', 'UI/UX-Tests', 'green'],
            ['Test Plan Management', 'Testplan-Management', 'orange'],
            ['Database Testing', 'Datenbanktests', 'pink'],
          ].map(([en, de, color], index) => (
            <div key={index}>
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">{isGerman ? de : en}</h6>
              </div>
              <ProgressBar color={color} progress={100} />
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="mt-1">{isGerman ? 'Abgeschlossene Projekte' : 'Projects Completed'}</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiArrowUp size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">600+</h2>
            <p className="mt-1">{isGerman ? 'Fehler protokolliert' : 'Bugs Logged'}</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">0%</h2>
            <p className="mt-1">{isGerman ? 'Fehlerschlupf' : 'Bugs Leakage'}</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">3</h2>
            <p className="mt-1">{isGerman ? 'Jahre Erfahrung' : 'Years of Experience'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
