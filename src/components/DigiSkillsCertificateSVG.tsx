import React from 'react';

interface DigiSkillsCertificateSVGProps {
  recipientName?: string;
  courseTitle?: string;
  batch?: string;
  issueDate?: string;
  certificateId?: string;
  verificationUrl?: string;
  className?: string;
}

export default function DigiSkillsCertificateSVG({
  recipientName = 'MUHAMMAD ANEES',
  courseTitle = 'WORDPRESS',
  batch = 'DSTP3.0-Batch-02 Dec 2025-Mar 2026',
  issueDate = '14/03/2026',
  certificateId = '736DY67MK',
  verificationUrl = 'https://digiskills.pk/verify',
  className = 'w-full h-auto shadow-2xl rounded-xl',
}: DigiSkillsCertificateSVGProps) {
  return (
    <div className={`relative overflow-hidden bg-white text-slate-800 ${className}`}>
      <svg
        viewBox="0 0 1000 707"
        className="w-full h-auto block select-none font-sans"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="circleArc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Clean White Background */}
        <rect width="1000" height="707" fill="#FFFFFF" />

        {/* Subtle Tech Circuit Blueprint Background Lines */}
        <g stroke="#E2E8F0" strokeWidth="1.2" opacity="0.65" fill="none">
          {/* Circuit nodes */}
          <circle cx="120" cy="180" r="4" fill="#CBD5E1" />
          <circle cx="120" cy="300" r="4" fill="#CBD5E1" />
          <circle cx="220" cy="240" r="3" fill="#CBD5E1" />
          <circle cx="850" cy="190" r="4" fill="#CBD5E1" />
          <circle cx="880" cy="320" r="4" fill="#CBD5E1" />
          <circle cx="780" cy="260" r="3" fill="#CBD5E1" />

          {/* Circuit connection paths */}
          <path d="M 60 220 H 120 V 300 H 200" />
          <path d="M 120 180 H 220 V 240 H 260" />
          <path d="M 940 220 H 880 V 320 H 800" />
          <path d="M 880 190 H 780 V 260 H 740" />

          {/* Decorative gear wheels (light tech theme) */}
          <circle cx="90" cy="380" r="28" strokeDasharray="3 3" stroke="#CBD5E1" />
          <circle cx="90" cy="380" r="10" stroke="#CBD5E1" />
          <circle cx="910" cy="380" r="28" strokeDasharray="3 3" stroke="#CBD5E1" />
          <circle cx="910" cy="380" r="10" stroke="#CBD5E1" />
        </g>

        {/* TOP BAR / LOGOS HEADER */}
        {/* Ministry of IT & Telecom Logo (Left) */}
        <g transform="translate(35, 18)">
          {/* Green Pakistan Flag Emblem */}
          <circle cx="25" cy="25" r="20" fill="#01411C" />
          <path
            d="M 23 15 A 10 10 0 1 0 31 31 A 12 12 0 1 1 23 15"
            fill="#FFFFFF"
          />
          <polygon
            points="29,18 31,23 35,21 32,25 35,28 30,27 28,31 28,26 24,24 28,22"
            fill="#FFFFFF"
            transform="scale(0.7) translate(10, 3)"
          />
          <text x="56" y="21" fontFamily="sans-serif" fontSize="10.5" fontWeight="bold" fill="#01411C">
            Ministry of Information
          </text>
          <text x="56" y="32" fontFamily="sans-serif" fontSize="9.5" fontWeight="bold" fill="#01411C">
            Technology &amp; Telecom
          </text>
          <text x="56" y="42" fontFamily="sans-serif" fontSize="8" fill="#475569">
            Government of Pakistan
          </text>
        </g>

        {/* DigiSkills.pk Logo (Center) */}
        <g transform="translate(365, 20)">
          {/* S Orange Chevron Icon */}
          <path
            d="M 14 6 C 24 6 36 12 36 24 C 36 34 26 40 16 40 C 26 40 32 46 32 54 C 32 64 20 70 8 70 C 18 70 24 64 24 56 C 24 48 16 44 6 44 C 18 44 24 38 24 28 C 24 16 16 6 4 6 Z"
            fill="#F59E0B"
            transform="scale(0.55)"
          />
          <text x="32" y="31" fontFamily="sans-serif" fontSize="30" fontWeight="900" fill="#F59E0B">
            Digi
          </text>
          <text x="96" y="31" fontFamily="sans-serif" fontSize="30" fontWeight="900" fill="#1E293B">
            Skills
          </text>
          <text x="180" y="31" fontFamily="sans-serif" fontSize="24" fontWeight="bold" fill="#F59E0B">
            .pk
          </text>
          <text x="92" y="42" fontFamily="sans-serif" fontSize="8.5" fontWeight="bold" fill="#334155" letterSpacing="1">
            Sara Jahan Hamara
          </text>
        </g>

        {/* Ignite Logo (Right) */}
        <g transform="translate(830, 24)">
          <text x="0" y="26" fontFamily="sans-serif" fontSize="30" fontWeight="800" fill="#1E293B">
            Ign
          </text>
          <text x="46" y="26" fontFamily="sans-serif" fontSize="30" fontWeight="800" fill="#F97316">
            i
          </text>
          <text x="56" y="26" fontFamily="sans-serif" fontSize="30" fontWeight="800" fill="#1E293B">
            te
          </text>
          <path d="M 94 4 L 110 20 L 94 36 L 78 20 Z" fill="#E2E8F0" />
          <path d="M 94 9 L 105 20 L 94 31 L 83 20 Z" fill="#F97316" opacity="0.85" />
          <text x="-4" y="37" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" fill="#64748B" letterSpacing="0.5">
            NATIONAL TECHNOLOGY FUND
          </text>
        </g>

        {/* CENTRAL EMBLEM & GRAPHICS */}
        <g transform="translate(500, 240)">
          {/* Circular dial elements matching DigiSkills artwork */}
          <circle cx="0" cy="0" r="140" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="0" cy="0" r="160" fill="none" stroke="#F1F5F9" strokeWidth="1.5" />

          {/* Yellow, cyan, navy arc sectors */}
          <path d="M -115 -75 A 140 140 0 0 1 -40 -134" fill="none" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" />
          <path d="M -20 -138 A 140 140 0 0 1 80 -115" fill="none" stroke="#0284C7" strokeWidth="18" />
          <path d="M 90 -108 A 140 140 0 0 1 138 -20" fill="none" stroke="#1E3A8A" strokeWidth="14" />
          
          {/* Top pixelated blocks */}
          <rect x="-80" y="-170" width="160" height="24" fill="#E0F2FE" opacity="0.7" rx="3" />
          <g fill="#0284C7" opacity="0.6">
            <rect x="-70" y="-165" width="8" height="8" />
            <rect x="-55" y="-165" width="8" height="8" />
            <rect x="-40" y="-165" width="8" height="8" />
            <rect x="-25" y="-165" width="8" height="8" />
            <rect x="-10" y="-165" width="8" height="8" />
            <rect x="5" y="-165" width="8" height="8" />
            <rect x="20" y="-165" width="8" height="8" />
            <rect x="35" y="-165" width="8" height="8" />
            <rect x="50" y="-165" width="8" height="8" />
          </g>

          {/* Circuit arrows */}
          <path d="M -170 0 H -140 M -160 -10 L -170 0 L -160 10" fill="none" stroke="#94A3B8" strokeWidth="2.5" />
          <path d="M 140 0 H 170 M 160 -10 L 170 0 L 160 10" fill="none" stroke="#94A3B8" strokeWidth="2.5" />
        </g>

        {/* CERTIFICATE HEADLINE */}
        <text
          x="500"
          y="275"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="48"
          fontWeight="900"
          fill="#0F4C81"
          letterSpacing="1.5"
        >
          TRAINING
        </text>
        <text
          x="500"
          y="330"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="54"
          fontWeight="900"
          fill="#0F4C81"
          letterSpacing="2"
        >
          CERTIFICATE
        </text>

        {/* RECIPIENT NAME */}
        <text
          x="500"
          y="415"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="36"
          fontWeight="800"
          fill="#1E293B"
          letterSpacing="3"
        >
          {recipientName}
        </text>

        {/* CERTIFICATION TEXT */}
        <text
          x="500"
          y="460"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="17"
          fill="#334155"
        >
          has completed the training in{' '}
          <tspan fontWeight="800" fontStyle="italic" fill="#0F172A">
            {courseTitle}
          </tspan>{' '}
          course under DigiSkills Training Program
        </text>

        {/* BATCH NUMBER */}
        <text
          x="500"
          y="492"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="16"
          fontWeight="bold"
          fill="#0F172A"
        >
          {batch}
        </text>

        {/* SIGNATURES AREA */}
        {/* Rector, Virtual University (Left signature in green cursive) */}
        <g transform="translate(260, 520)">
          {/* Stylized realistic green cursive signature */}
          <path
            d="M 10 28 Q 25 5 35 30 T 55 15 T 75 32 Q 95 18 105 28"
            fill="none"
            stroke="#15803D"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 38 8 L 42 35 M 48 30 Q 70 20 85 28"
            fill="none"
            stroke="#15803D"
            strokeWidth="2"
          />
          <line x1="0" y1="40" x2="140" y2="40" stroke="#94A3B8" strokeWidth="1" />
          <text x="70" y="56" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#475569">
            Rector, Virtual University
          </text>
        </g>

        {/* CEO, Ignite (Right signature in dark grey) */}
        <g transform="translate(640, 520)">
          {/* Stylized realistic signature */}
          <path
            d="M 10 32 Q 25 10 40 28 T 60 18 T 80 34 Q 95 24 110 32"
            fill="none"
            stroke="#1E293B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line x1="0" y1="40" x2="140" y2="40" stroke="#94A3B8" strokeWidth="1" />
          <text x="70" y="56" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#475569">
            CEO, Ignite
          </text>
        </g>

        {/* Virtual University Logo (Bottom Left) */}
        <g transform="translate(35, 600)">
          <rect x="0" y="0" width="95" height="48" rx="4" fill="#0A3A60" />
          <text x="47" y="36" textAnchor="middle" fontFamily="serif" fontSize="38" fontWeight="900" fill="#FFFFFF">
            VU
          </text>
          <text x="47" y="58" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#0A3A60">
            Virtual University
          </text>
        </g>

        {/* BOTTOM ORANGE STRIP */}
        <rect x="0" y="670" width="1000" height="37" fill="#F59E0B" />

        {/* Issue Date */}
        <text
          x="35"
          y="693"
          fontFamily="sans-serif"
          fontSize="13"
          fontWeight="600"
          fill="#FFFFFF"
        >
          Issue Date : {issueDate}
        </text>

        {/* Online Verification text & URL */}
        <text
          x="500"
          y="693"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="13"
          fontWeight="600"
          fill="#FFFFFF"
        >
          This document may be verified online at: {verificationUrl}
        </text>

        {/* Certificate ID */}
        <text
          x="965"
          y="693"
          textAnchor="end"
          fontFamily="sans-serif"
          fontSize="13"
          fontWeight="bold"
          fill="#FFFFFF"
        >
          Certificate ID: {certificateId}
        </text>
      </svg>
    </div>
  );
}
