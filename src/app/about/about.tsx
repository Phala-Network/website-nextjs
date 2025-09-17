"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroCommits } from "@/components/hero-commits";
import { PhalaMissionValues } from "@/components/phala-mission-values";
import { Community6 } from "@/components/community6";
import teamData from "./phala-team-list.json";

// Helper function to get first image in folder
function getImageFromFolder(memberName: string, folder: 'commercial' | 'lifestyle') {
  const memberFolder = memberName.toLowerCase().replace(/\s+/g, '-');
  // Try common image extensions
  const extensions = ['jpg', 'jpeg', 'png', 'webp'];
  const commonNames = ['photo', 'image', 'profile', 'headshot'];

  // For specific known files, return direct paths
  const knownImages: { [key: string]: string } = {
    'doyle-guo-commercial': '/team/doyle-guo/commercial/Gemini_Generated_Image_42ey5j42ey5j42ey.png',
    'shelven-zhou-commercial': '/team/shelven-zhou/commercial/WechatIMG35.jpeg',
    'steven-liu-commercial': '/team/steven-liu/commercial/1713665910543.jpeg',
    'maggie-liu-commercial': '/team/maggie-liu/commercial/Gemini_Generated_Image_emxrohemxrohemxr.png',
    'shanyu-juneja-commercial': '/team/shanyu-juneja/commercial/Gemini_Generated_Image_kxg0irkxg0irkxg0.png',
    'wenfeng-wang-commercial': '/team/wenfeng-wang/commercial/1730884566679.jpeg',
    'zoe-meckbach-commercial': '/team/zoe-meckbach/commercial/Gemini_Generated_Image_hsawq2hsawq2hsaw.png',
    'zoé-meckbach-commercial': '/team/zoe-meckbach/commercial/Gemini_Generated_Image_hsawq2hsawq2hsaw.png',
    'xiaolu-huang-commercial': '/team/xiaolu-huang/commercial/Gemini_Generated_Image_33dpas33dpas33dp.png',
    'joshua-waller-commercial': '/team/joshua-waller/commercial/Gemini_Generated_Image_siumy7siumy7sium.png',
    'dylan-kawalec-commercial': '/team/dylan-kawalec/commercial/Gemini_Generated_Image_ok44gwok44gwok44.png',
    'marvin-tong-commercial': '/team/marvin-tong/commercial/Marvin (BL).jpeg',
    'kevin-wang-commercial': '/team/kevin-wang/commercial/Gemini_Generated_Image_boqi4uboqi4uboqi.png',
    'jayson-mcquown-commercial': '/team/jayson-mcquown/commercial/Gemini_Generated_Image_mjiwz6mjiwz6mjiw.png',
    'paco-commercial': '/team/paco/commercial/Gemini_Generated_Image_czmtplczmtplczmt.png',
    'hugo-quelin-commercial': '/team/hugo-quelin/commercial/Gemini_Generated_Image_mw1l3fmw1l3fmw1l.png',
    'hang-yin-commercial': '/team/hang-yin/commercial/IMG_7797.JPG',
    'kinsley-commercial': '/team/kinsley/commercial/Gemini_Generated_Image_4i74uy4i74uy4i74 (1).png',
    'lee-commercial': '/team/lee/commercial/Gemini_Generated_Image_z6pzlzz6pzlzz6pz.png',
  };

  const key = `${memberFolder}-${folder}`;
  return knownImages[key] || `/team/${memberFolder}/${folder}/photo.jpg`;
}

// Team member card with flip animation
function TeamMemberCard({ member, index }: { member: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Get commercial image path
  const commercialImage = member.commercialImage || getImageFromFolder(member.name, 'commercial');

  // Fallback to GitHub avatar if no custom photos
  const githubAvatar = member.github ? `https://github.com/${member.github}.png?size=400` : null;

  // Deterministic emojis based on member name (to avoid hydration mismatch)
  const personalityEmojis = ['🚀', '💡', '🎯', '⚡', '🌟', '🔥', '💫', '🎉', '🌈', '✨', '🎨', '🎪', '🎭', '🎸', '🎮', '📸', '🏃‍♂️', '🧠', '💪', '🌊'];

  // Create deterministic "random" selection based on member name
  const getPersonalityEmojis = (name: string) => {
    const nameHash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const shuffledEmojis = [...personalityEmojis];

    // Deterministic shuffle based on name hash
    for (let i = shuffledEmojis.length - 1; i > 0; i--) {
      const j = (nameHash + i) % (i + 1);
      [shuffledEmojis[i], shuffledEmojis[j]] = [shuffledEmojis[j], shuffledEmojis[i]];
    }

    return shuffledEmojis.slice(0, 4);
  };

  const memberEmojis = getPersonalityEmojis(member.name);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="h-[380px] perspective-1000"
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* A Side - Front Card (always show name and role, no hover effect) */}
        <div className="absolute inset-0 backface-hidden border-2 border-border hover:border-primary transition-colors duration-300 overflow-hidden rounded-lg bg-card">
          <div className="relative w-full h-full">
            {/* Main Photo - Commercial - Full card coverage */}
            <Image
              src={commercialImage}
              alt={member.name}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (githubAvatar && target.src !== githubAvatar) {
                  target.src = githubAvatar;
                } else {
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
                      <rect width="400" height="400" fill="#f3f4f6"/>
                      <circle cx="200" cy="150" r="60" fill="#d1d5db"/>
                      <circle cx="200" cy="320" r="100" fill="#d1d5db"/>
                      <text x="200" y="380" text-anchor="middle" font-family="Arial" font-size="20" fill="#6b7280">
                        ${member.name.split(' ').map((n: string) => n[0]).join('')}
                      </text>
                    </svg>
                  `)}`;
                }
              }}
              unoptimized
            />
            {/* Overlay with name and role */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-lg font-bold">{member.name}</h3>
              <p className="text-white/80 text-sm">{member.role}</p>
            </div>
          </div>
        </div>

        {/* B Side - Back Card (photo with emoji animation around it) */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 border-2 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="p-4 h-full flex flex-col">
            {/* Photo with floating emojis around it */}
            <div className="relative flex-1 w-full overflow-hidden mb-4 rounded-lg">
              <Image
                src={commercialImage}
                alt={member.name}
                fill
                className="object-cover rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (githubAvatar && target.src !== githubAvatar) {
                    target.src = githubAvatar;
                  } else {
                    target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
                        <rect width="400" height="400" fill="#f3f4f6"/>
                        <circle cx="200" cy="150" r="60" fill="#d1d5db"/>
                        <circle cx="200" cy="320" r="100" fill="#d1d5db"/>
                        <text x="200" y="380" text-anchor="middle" font-family="Arial" font-size="20" fill="#6b7280">
                          ${member.name.split(' ').map((n: string) => n[0]).join('')}
                        </text>
                      </svg>
                    `)}`;
                  }
                }}
                unoptimized
              />

              {/* Floating emojis around the photo */}
              {memberEmojis.map((emoji, idx) => (
                <motion.div
                  key={idx}
                  className="absolute text-2xl select-none z-10"
                  style={{
                    left: idx === 0 ? '10px' : idx === 1 ? 'calc(100% - 40px)' : idx === 2 ? '10px' : 'calc(100% - 40px)',
                    top: idx === 0 ? '10px' : idx === 1 ? '10px' : idx === 2 ? 'calc(100% - 40px)' : 'calc(100% - 40px)',
                  }}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, -5, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 0.8, 1],
                  }}
                  transition={{
                    duration: 2 + idx * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.2
                  }}
                >
                  {emoji}
                </motion.div>
              ))}

              {/* Name overlay on photo */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                <h3 className="text-white text-lg font-bold">{member.name}</h3>
                <Badge className="mt-1" variant="secondary">{member.role}</Badge>
              </div>
            </div>

            {/* Description */}
            <div className="mb-3">
              <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                {member.description || `${member.name} is a valued member of the Phala Network team, contributing to our mission of building the future of confidential computing.`}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 justify-center flex-wrap">
              {member.github && (
                <Button size="sm" variant="outline" asChild>
                  <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                    <Github className="h-3 w-3" />
                  </a>
                </Button>
              )}
              {member.linkedin && (
                <Button size="sm" variant="outline" asChild>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-3 w-3" />
                  </a>
                </Button>
              )}
              {member.twitter && (
                <Button size="sm" variant="outline" asChild>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-3 w-3" />
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const { founders, leadership, engineering, business_operations } = teamData.phala_team;

  // Custom order: marvin, hang, zoe, joshua, doyle, jayson, dylan, kevin, kinsley, xiaolu, hugo, paco...
  const customOrder = [
    "Marvin Tong",
    "Hang Yin",
    "Zoé Meckbach",
    "Joshua Waller",
    "Doyle Guo",
    "Jayson McQuown",
    "Dylan Kawalec",
    "Kevin Wang",
    "Kinsley",
    "Xiaolu Huang",
    "Hugo Quelin",
    "Paco",
    // Add remaining members in original order
    "Shelven Zhou",
    "Wenfeng Wang",
    "Lee",
    "Steven Liu",
    "Maggie Liu",
    "Shanyu Juneja"
  ];

  const allTeam = [
    ...founders.map(m => ({ ...m, category: "founders" })),
    ...leadership.map(m => ({ ...m, category: "leadership" })),
    ...engineering.map(m => ({ ...m, category: "engineering" })),
    ...business_operations.map(m => ({ ...m, category: "operations" }))
  ];

  // Sort team members by custom order
  const sortedTeam = allTeam.sort((a, b) => {
    const indexA = customOrder.indexOf(a.name);
    const indexB = customOrder.indexOf(b.name);

    // If both are in custom order, sort by index
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    // If only one is in custom order, prioritize it
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    // If neither is in custom order, maintain original order
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Hero Section - Commits History */}
      <HeroCommits />

      {/* Mission & Values Section */}
      <PhalaMissionValues />

      {/* Team Section */}
      <section id="team" className="py-20 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Click on any profile to learn more about our talented team members
          </p>

        </div>

        {/* Team Grid - Optimized cards without empty space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedTeam.map((member, index) => (
            <TeamMemberCard key={`${member.name}-${index}`} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* Community Section */}
      <Community6 />

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-6">
        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for
              privacy, decentralization, and cutting-edge technology.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/careers">
                  <Rocket className="mr-2 h-4 w-4" />
                  View Open Positions
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="mailto:careers@phala.network">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}