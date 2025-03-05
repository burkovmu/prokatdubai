'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Star, Shield, Clock } from 'lucide-react';

type TeamMember = {
  name: string;
  position: string;
  description: string;
  image: string;
};

type StatItem = {
  number: string;
  label: string;
};

type AdvantageItem = {
  title: string;
  description: string;
};

export default function About() {
  const t = useTranslations('about');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = t.raw('mission.values') as string[];
  const teamMembers = t.raw('team.members') as TeamMember[];
  const stats = t.raw('stats.items') as StatItem[];
  const advantages = t.raw('advantages.items') as AdvantageItem[];

  return (
    <div className="min-h-screen bg-primary-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="About Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 to-primary-950/95" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl"
              {...fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-primary-200">
                {t('hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light text-white mb-6">{t('mission.title')}</h2>
            <p className="text-lg text-primary-300 mb-12">{t('mission.description')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-primary-900/50 backdrop-blur-lg rounded-lg border border-primary-800/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-primary-200">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">{t('team.title')}</h2>
            <p className="text-xl text-primary-300">{t('team.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative bg-primary-900/30 backdrop-blur-lg rounded-lg overflow-hidden border border-primary-800/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-medium text-white mb-2">{member.name}</h3>
                  <p className="text-accent-400 mb-4">{member.position}</p>
                  <p className="text-primary-300">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-primary-900/50 to-primary-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-primary-900/30 backdrop-blur-lg rounded-lg border border-primary-800/50"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-light text-accent-400 mb-2">{stat.number}</div>
                <div className="text-primary-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-white text-center mb-16">{t('advantages.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="p-8 bg-primary-900/30 backdrop-blur-lg rounded-lg border border-primary-800/50 hover:border-accent-400/50 transition-colors duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-medium text-white mb-4">{advantage.title}</h3>
                <p className="text-primary-300">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 