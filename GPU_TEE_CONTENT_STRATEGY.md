# GPU TEE Landing Page - Content & Design Strategy

## Page Flow Strategy: /gpu-tee

### 1. HERO (gpu-tee-hero.tsx) ✅
**Purpose**: Immediate impact + clear differentiation
- **Headline**: "Most Powerful AI GPUs. Most Secure Platform."
- **Key Message**: Only cloud with Intel TDX + NVIDIA CC
- **Visual**: Animated masked hero with tech badges
- **CTA**: "Deploy GPU TEE Now" + "View Pricing"

### 2. COMPARISON (compare-full-stack-tee.tsx) ✅
**Purpose**: Establish competitive superiority
- **Component**: compare9 (table format)
- **Headline**: "Why Phala Cloud is Unique"
- **Content**: 8-metric comparison vs Standard Cloud vs NVIDIA-only
- **Key Differentiators**:
  - ❌ Standard: No TEE
  - ⚠️ NVIDIA-only: GPU protection but CPU/RAM exposed
  - ✅ Phala: Full-Stack TEE (Intel TDX + NVIDIA CC)

### 3. GPU CONFIGURATIONS (feature221.tsx)
**Purpose**: Show available hardware + pricing
- **Headline**: "Available GPU Configurations"
- **Cards**: H200, H100, B200
- **Each Card Shows**:
  - GPU specs (memory, bandwidth)
  - "Full-Stack TEE" badge
  - On-demand vs Reserved pricing
  - CTA to sub-page

### 4. USE CASES (feature76.tsx)
**Purpose**: Help visitors see themselves using the product
- **Headline**: "What You Can Build with GPU TEE"
- **6 Use Cases**:
  1. Private Enterprise AI (Healthcare, Finance, Legal)
  2. User-Owned AI Agents (Eliza, Virtuals)
  3. ZK Proof Generation (SP1 zkVM, zkRollups)
  4. FHE/MPC Acceleration (Fairblock, Mind Network)
  5. Multi-Proof Systems
  6. Regulatory Compliance (GDPR, HIPAA, SOC 2)

### 5. DEPLOYMENT MODELS (feature51.tsx with tabs)
**Purpose**: Show flexibility in how customers can deploy
- **Headline**: "Three Ways to Deploy GPU TEE"
- **Tab 1: CVM + GPU** - Full control, SSH access
- **Tab 2: Confidential Models** - One-click deployment
- **Tab 3: Enterprise** - White-glove service

### 6. GPU CAROUSEL (gallery16.tsx)
**Purpose**: Visual showcase of GPUs with specs
- **Interactive Carousel**: H200, H100, B200
- **Each Slide**: Large visual + detailed specs + CTA

### 7. TECHNICAL FEATURES (feature67.tsx)
**Purpose**: Technical credibility for engineers
- **Headline**: "Full-Stack TEE Architecture"
- **6 Features**:
  1. Full VM Isolation (Intel TDX)
  2. GPU Memory Encryption (NVIDIA CC)
  3. Dual Remote Attestation
  4. End-to-End Encryption
  5. Global Availability
  6. Compliance Ready

### 8. PERFORMANCE BENCHMARKS (stats7 + stats18)
**Purpose**: Prove that TEE doesn't hurt performance
- **Key Stats**:
  - <5% TEE Overhead
  - 2x H200 vs H100 performance
  - 4.8 TB/s bandwidth
  - SP1 zkVM: 4-5% overhead in TEE

### 9. FAQ (faq14.tsx)
**Purpose**: Handle objections + technical questions
- **Categories**:
  1. GPU TEE Basics
  2. Use Cases & Deployment
  3. Technical & Pricing

---

## Page Flow Strategy: /gpu-tee/h100

### 1. HERO (hero4.tsx)
**Content**: "Enterprise AI with H100 GPUs"
- Proven performance + complete security
- 80GB HBM3, 9x faster training
- CTA: Deploy H100 / View Pricing

### 2. TECHNICAL SPECS (stats13 + feature261)
**Visual Grid Showcase**:
- 80GB HBM3 Memory
- 3TB/s Bandwidth
- Full TEE (Intel TDX + NVIDIA CC)
- 9x Faster vs A100
- Dual Attestation

### 3. PRICING (pricing5.tsx)
**Two-Column Comparison**:
- **On-Demand**: $3.08/GPU/hr
  - No commitment
  - Scale 1-2 GPUs
  - Full-Stack TEE included
- **Reserved**: $2.50/GPU/hr (SAVE 30%)
  - 3+ month commitment
  - Enterprise discounts
  - Dedicated support

### 4. CONFIGURATIONS TABLE (feature237.tsx)
**Detailed Config Options**:
| GPUs | CPU | vCPU | RAM | Storage | Location | On-Demand | Reserved |
|------|-----|------|-----|---------|----------|-----------|----------|
| 1x H100 | Platinum 8558 | 24 | 256GB | 960GB | US-West | $3.08/hr | $2.50/hr |
| 2x H100 | Platinum 8558 | 48 | 512GB | 1.9TB | US-West | Contact | Contact |

### 5. TEE FEATURES (feature3.tsx)
**6-Feature Grid**: Same as main page but H100-focused

### 6. USE CASES (feature76.tsx)
**Reuse from main page** - same content

### 7. DEPLOYMENT OPTIONS (feature51.tsx)
**Reuse from main page** - same tabs

---

## Key Copywriting Principles

### Tone
- **Professional but accessible** - Technical without being intimidating
- **Confident but not aggressive** - Let facts speak
- **Benefit-first** - Lead with "what you get", follow with "how it works"

### Messaging Hierarchy
1. **Primary**: Full-Stack TEE (Intel TDX + NVIDIA CC) = Complete Protection
2. **Secondary**: Dual Attestation = Verifiable Security
3. **Tertiary**: <5% Overhead = Performance Without Compromise

### Call-to-Action Strategy
- **Primary CTA**: "Deploy [GPU] Now" → Direct to cloud.phala.network
- **Secondary CTA**: "View Pricing" / "Contact Sales"
- **Tertiary CTA**: "Learn More" → Docs/Blog posts

### Social Proof Integration
- **Partners**: Eliza, Virtuals, Fairblock, Mind Network, Spore.fun
- **Use Cases**: SP1 zkVM benchmarks, FHE voting, zkTLS
- **Stats**: <5% overhead, 2x performance

### Technical Credibility
- **Specific Numbers**: 141GB HBM3e, 4.8 TB/s, <5% overhead
- **Verification**: Link to attestation docs, open-source tools
- **Compliance**: GDPR, HIPAA, SOC 2 mentions

---

## Implementation Priority

### Phase 1: Core Content (Now)
1. ✅ Hero (custom component)
2. ✅ Comparison table (custom component)
3. GPU Configurations (update feature221)
4. Use Cases (update feature76)
5. Deployment Models (update feature51)

### Phase 2: Supporting Content
6. GPU Carousel (update gallery16)
7. Technical Features (update feature67)
8. Performance Stats (update stats7 + stats18)
9. FAQ (update faq14)

### Phase 3: Sub-Pages
10. H100 page (all components)
11. H200 page (all components)

---

## Visual Design Notes

### Color Strategy
- **Primary Gradient**: Blue → Purple (trust + innovation)
- **Success Green**: For "Full-Stack TEE" badges and checkmarks
- **Warning Red**: For competitor limitations
- **Neutral Gray**: For standard/neutral features

### Typography Hierarchy
- **H1**: 4xl-7xl (Hero headlines)
- **H2**: 3xl-5xl (Section titles)
- **H3**: 2xl-3xl (Card titles)
- **Body**: base-lg (Descriptions)
- **Small**: sm-xs (Technical details)

### Spacing & Layout
- **Sections**: py-32 (generous vertical space)
- **Container**: max-w-7xl (wide for comparison tables)
- **Cards**: Rounded-xl with subtle borders
- **Hover States**: Subtle scale/shadow for interactivity

