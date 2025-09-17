# Team Member Photo Management Guide

## 📁 New Folder Structure (Easy Drag & Drop!)

Each team member has their own folder with two subdirectories:

```
public/team/
├── marvin-tong/
│   ├── commercial/     # Drop professional photo here
│   │   └── (any filename).jpg
│   └── lifestyle/      # Drop casual photo here
│       └── (any filename).jpg
├── hang-yin/
│   ├── commercial/
│   └── lifestyle/
├── doyle-guo/
│   ├── commercial/
│   └── lifestyle/
└── [other team members...]
```

## ✨ Key Benefits:
- **No renaming needed!** - Just drop any image file into the folder
- **Any filename works** - photo.jpg, IMG_1234.jpg, headshot.png, etc.
- **Automatic detection** - System will find the first image in each folder
- **Easy to organize** - Each person has their own space

## 📸 How to Add Photos

### Step 1: Find the person's folder
Navigate to: `/public/team/[person-name]/`

Person folders created:
- `marvin-tong/`
- `hang-yin/`
- `doyle-guo/`
- `kevin-wang/`
- `shelven-zhou/`
- `wenfeng-wang/`
- `dylan-kawalec/`
- `joshua-waller/`
- `kinsley/`
- `lee/`
- `paco/`
- `zoe-meckbach/`
- `steven-liu/`
- `hugo-quelin/`
- `maggie-liu/`
- `jayson-mcquown/`
- `shanyu-juneja/`
- `xiaolu-huang/`

### Step 2: Drop photos
1. **Commercial photo** → Drop into `commercial/` folder
2. **Lifestyle photo** → Drop into `lifestyle/` folder

### Step 3: That's it!
The system will automatically use whatever image is in each folder.

## 🎨 Photo Guidelines

### Commercial Photos (Professional)
- Business attire or smart casual
- Office/conference setting or clean background
- Professional headshot style
- Good lighting

### Lifestyle Photos (Personal)
- Casual setting showing personality
- Hobbies, travel, or team events
- Natural, relaxed poses
- Shows the human side

### Technical Requirements
- **Minimum size**: 800x800px
- **Ideal ratio**: 3:4 (portrait)
- **Format**: JPG, PNG, or WebP
- **File size**: Under 1MB recommended

## 🔄 Image Loading Priority

The system will try to load images in this order:
1. **Custom photo** from the person's folder
2. **GitHub avatar** (if available)
3. **Initials placeholder** (fallback)

## 📝 Adding Extended Information

Update `phala-team-list.json` to add more details about each team member:

```json
{
  "name": "Team Member Name",
  "role": "Current Role",
  "github": "githubusername",
  "linkedin": "https://linkedin.com/in/username",

  // Extended information for the flip card back
  "bio": "2-3 sentence biography about their journey and role at Phala",

  "expertise": [
    "Blockchain",
    "Rust",
    "TEE",
    "Zero-Knowledge Proofs"
  ],

  "achievements": [
    "Led development of X feature",
    "Published research on Y",
    "Speaker at Z conference"
  ],

  "interests": "Photography, hiking, open-source",

  "education": "PhD Computer Science, University X",

  "previousExperience": "Former Senior Engineer at Company Y"
}
```

## 🎯 UI Features

### Card Front:
- Toggle between Commercial/Lifestyle photos (💼/❤️ buttons)
- Name, role, and location
- Short description
- Social media links
- "Click to see more" indicator

### Card Back (After Flip):
- Lifestyle photo
- Extended biography
- Expertise badges
- Achievement list
- Personal interests
- GitHub contributions
- Education & experience

## 🚀 Quick Start

1. **Drop a test photo** into `/public/team/marvin-tong/commercial/`
2. **Refresh the page** at http://localhost:3005/about
3. **See it appear** automatically!

No configuration needed - just drag, drop, and done! 🎉