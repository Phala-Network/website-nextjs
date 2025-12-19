// Trust Center Data
// Controls data from CSV and subprocessors from DPA

export interface Control {
  id: string
  category: string
  name: string
  description: string
  status: 'implemented' | 'in_progress' | 'planned'
  soc2?: string
  hipaa?: string
}

export interface Subprocessor {
  name: string
  purpose: string
  jurisdiction: string
  website?: string
}

export interface ComplianceReport {
  id: string
  name: string
  description: string
  icon: 'hipaa' | 'soc2'
  downloadUrl: string | null
  status: 'available' | 'coming_soon'
}

// Compliance Reports
export const complianceReports: ComplianceReport[] = [
  {
    id: 'hipaa',
    name: 'HIPAA Compliance',
    description:
      'Health Insurance Portability and Accountability Act compliance certification demonstrating our commitment to protecting sensitive patient health information.',
    icon: 'hipaa',
    downloadUrl: null, // Report link will be added when available
    status: 'coming_soon',
  },
  {
    id: 'soc2-type1',
    name: 'SOC 2 Type I',
    description:
      'Service Organization Control 2 Type I report validating our security, availability, and confidentiality controls at a specific point in time.',
    icon: 'soc2',
    downloadUrl: '/phala_soc2_type1_report.pdf',
    status: 'available',
  },
]

// Controls data from Controls-11102025.csv
export const controls: Control[] = [
  // Data & Customer Protection
  {
    id: 'DCF-1',
    category: 'Data & Customer Protection',
    name: 'Customer Data Policies',
    description:
      'Phala Network Management has approved all policies that detail how customer data may be made accessible and should be handled. These policies are accessible to all employees and contractors.',
    status: 'implemented',
    hipaa: '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.316(a)',
  },
  {
    id: 'DCF-2',
    category: 'Data & Customer Protection',
    name: 'Least-Privileged Policy for Sensitive Data Access',
    description:
      'Phala Network authorizes access to information resources, including data and the systems that store or process sensitive data, based on the principle of least privilege.',
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(4)(i), 164.308(a)(4)(ii)(A), 164.308(a)(4)(ii)(B), 164.308(a)(4)(ii)(C), 164.312(a)(1), 164.316(a)',
  },
  {
    id: 'DCF-3',
    category: 'Data & Customer Protection',
    name: 'Encryption of Web-Based Management Interfaces',
    description:
      'Administrator access to web-based management interfaces is encrypted with strong cryptographic algorithms.',
    status: 'implemented',
    hipaa: '164.312(a)(2)(iv), 164.312(e)(1)',
  },
  // Change Management
  {
    id: 'DCF-4',
    category: 'Change Management',
    name: 'Version Control System',
    description:
      'Phala Network uses a version control system to manage source code, change documentation and tracking, release labeling, and other change management tasks. Access to the version control system is restricted to authorized personnel.',
    status: 'implemented',
    soc2: 'CC8.1',
  },
  {
    id: 'DCF-5',
    category: 'Change Management',
    name: 'Change Review Process',
    description:
      'Changes are peer-reviewed and approved prior to deployment by an individual different from the developer to maintain segregation of duties. Review requirements are enforced through automated mechanisms such as branch protection settings in the production code repository.',
    status: 'implemented',
    soc2: 'CC8.1',
  },
  {
    id: 'DCF-7',
    category: 'Change Management',
    name: 'Separate Environments',
    description:
      'Pre-production environments (e.g., development, testing, etc.) are separated from production environments and the separation is enforced with access controls.',
    status: 'implemented',
    soc2: 'CC8.1',
  },
  // Communication
  {
    id: 'DCF-8',
    category: 'Communication',
    name: 'External Communication Channels',
    description:
      'Phala Network provides external communication mechanisms for customers and third parties (e.g., communication features, support portal, external ticketing system, etc.) to report complaints, failures, bugs, incidents, vulnerabilities, requests for information, etc. Customer communications are responded to within defined SLAs.',
    status: 'implemented',
    soc2: 'CC2.3',
    hipaa: '164.402',
  },
  {
    id: 'DCF-9',
    category: 'Communication',
    name: 'Internal Communication Channels',
    description:
      'Internal communication channels are in place for employees to report failures, events, incidents, policy violations, concerns, and other issues to company management, including anonymous reporting channels if applicable.',
    status: 'implemented',
    soc2: 'CC1.1, CC1.5, CC2.2',
    hipaa: '164.402',
  },
  // Access Control
  {
    id: 'DCF-10',
    category: 'Access Control',
    name: 'Access Control Policy',
    description:
      'Phala Network has developed and documented a policy that outlines requirements for access control.',
    status: 'implemented',
    soc2: 'CC6.2, CC6.3',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(3)(ii)(A), 164.308(a)(3)(ii)(B), 164.308(a)(3)(ii)(C), 164.308(a)(4)(i), 164.308(a)(4)(ii)(A), 164.308(a)(4)(ii)(B), 164.308(a)(4)(ii)(C), 164.312(a)(1), 164.312(d), 164.316(a), 164.316(b)(1)(i), 164.316(b)(1)(ii)',
  },
  {
    id: 'DCF-11',
    category: 'Access Control',
    name: 'Periodic Access Reviews',
    description:
      'Management performs user access reviews periodically (as defined by policy and compliance requirements) to validate user accounts, including third party or vendor accounts, and their associated privileges remain appropriate. The review includes validation of logical and physical access as necessary. Changes resulting from the review, if any, are documented and implemented.',
    status: 'implemented',
    soc2: 'CC4.1, CC6.2, CC6.3, CC6.4',
    hipaa:
      '164.306(e), 164.308(a)(3)(ii)(A), 164.308(a)(4)(i), 164.308(a)(4)(ii)(A), 164.308(a)(4)(ii)(B), 164.308(a)(4)(ii)(C), 164.312(a)(1), 164.316(b)(1)(i), 164.316(b)(1)(ii)',
  },
  {
    id: 'DCF-59',
    category: 'Access Control',
    name: 'Privileged Access Restricted',
    description:
      'Administrative or privileged access to systems, resources, and functions is restricted to authorized personnel.',
    status: 'implemented',
    soc2: 'CC5.2, CC6.1',
    hipaa:
      '164.308(a)(3)(i), 164.308(a)(3)(ii)(A), 164.308(a)(4)(i), 164.308(a)(4)(ii)(A), 164.308(a)(4)(ii)(B), 164.308(a)(4)(ii)(C), 164.312(a)(1)',
  },
  {
    id: 'DCF-67',
    category: 'Access Control',
    name: 'Multi-Factor Authentication',
    description:
      'Authentication to systems requires the use of multi-factor authentication.',
    status: 'implemented',
    soc2: 'CC6.1, CC6.6',
  },
  {
    id: 'DCF-68',
    category: 'Access Control',
    name: 'Password Policy and Configuration',
    description:
      'Phala Network has a documented policy outlining the minimum requirements for passwords used for authentication to organizational systems. Password requirements are enforced for all systems in accordance with company policy.',
    status: 'implemented',
    soc2: 'CC6.1, CC6.6',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(5)(ii)(D), 164.312(a)(2)(iii), 164.316(a)',
  },
  {
    id: 'DCF-69',
    category: 'Access Control',
    name: 'Access Provisioning',
    description:
      'Access requests to information resources, including physical access and access to systems and data, are documented and approved by management based on least privilege, need to know, and segregation of duties principles.',
    status: 'implemented',
    soc2: 'CC5.1, CC5.2, CC6.1, CC6.2, CC6.3',
    hipaa:
      '164.308(a)(3)(ii)(A), 164.308(a)(3)(ii)(B), 164.308(a)(4)(i), 164.308(a)(4)(ii)(A), 164.308(a)(4)(ii)(B), 164.308(a)(4)(ii)(C), 164.312(a)(1)',
  },
  {
    id: 'DCF-70',
    category: 'Access Control',
    name: 'Access Deprovisioning',
    description:
      'System and physical access is revoked within one business day of effective termination date for terminated users (including employees, third parties and vendors, and other personnel).',
    status: 'implemented',
    soc2: 'CC6.1, CC6.2, CC6.3',
    hipaa:
      '164.308(a)(3)(ii)(C), 164.308(a)(4)(i), 164.308(a)(4)(ii)(A), 164.308(a)(4)(ii)(B), 164.308(a)(4)(ii)(C), 164.312(a)(1)',
  },
  {
    id: 'DCF-71',
    category: 'Access Control',
    name: 'Unique User IDs',
    description: 'Authentication to systems requires the use of unique identities.',
    status: 'implemented',
    soc2: 'CC6.1',
    hipaa: '164.308(a)(3)(ii)(A), 164.308(a)(3)(ii)(B), 164.312(a)(2)(i)',
  },
  {
    id: 'DCF-72',
    category: 'Access Control',
    name: 'Root Access Control',
    description:
      'Root password authentication to production resources (e.g., virtual machines, containers, etc.) is disabled and only allowed for under exceptional circumstances for a limited time duration based on documented business justification and approval from management.',
    status: 'implemented',
    hipaa: '164.312(a)(2)(i)',
  },
  // Configuration Management
  {
    id: 'DCF-12',
    category: 'Configuration Management',
    name: 'Baseline Configuration and Hardening Standards',
    description:
      'Phala Network has identified and documented baseline security configuration standards for all system components in accordance with industry-accepted hardening standards or vendor recommendations. These standards are reviewed periodically and updated as needed (e.g., when vulnerabilities are identified) and verified to be in place before or immediately after a production system component is installed or modified (e.g., through infrastructure as code, configuration checklists, etc.).',
    status: 'implemented',
    hipaa: '164.308(a)(4)(ii)(A)',
  },
  // Information Security Policy
  {
    id: 'DCF-13',
    category: 'Information Security Policy',
    name: 'Information Security Policies',
    description:
      'Phala Network has defined and documented an information security policy and other topic-specific policies as needed to support the functioning of internal control.',
    status: 'implemented',
    soc2: 'CC2.1, CC5.3',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(1)(ii)(C), 164.308(a)(2), 164.308(a)(5)(i), 164.308(a)(8), 164.310(b), 164.316(a)',
  },
  {
    id: 'DCF-32',
    category: 'Information Security Policy',
    name: 'Security Policies',
    description:
      'Company policies are accessible to all employees and, as applicable, third parties such as contractors. Personnel are required to acknowledge the information security policy and other topic-specific policies based on their job duties during onboarding and annually thereafter.',
    status: 'implemented',
    soc2: 'CC1.1, CC2.1, CC2.2, CC5.2, CC5.3',
  },
  {
    id: 'DCF-33',
    category: 'Information Security Policy',
    name: 'Periodic Policy Reviews',
    description:
      'Management reviews and approves company policies at least annually. Updates to the policies are made as deemed necessary (e.g., based on changes to business objectives, legal or regulatory requirements, organizational risks, etc.).',
    status: 'implemented',
    soc2: 'CC2.1, CC2.2, CC5.3',
    hipaa:
      '164.306(e), 164.308(a)(8), 164.316(b)(1)(i), 164.316(b)(1)(ii), 164.316(b)(2)(iii)',
  },
  // Organization
  {
    id: 'DCF-14',
    category: 'Organization',
    name: 'Organizational Chart',
    description:
      "An organizational chart is in place to describe the organizational structure and reporting lines. The chart is available to all employees (e.g., through the company's HRMS, intranets, etc.) and is updated upon changes to the organizational structure.",
    status: 'implemented',
    soc2: 'CC1.3, CC1.5, CC2.2',
  },
  {
    id: 'DCF-34',
    category: 'Organization',
    name: 'Security Team/Steering Committee',
    description:
      "Phala Network has an assigned security team that is responsible for the design, implementation, management, and review of the organization's security policies, standards, baselines, procedures, and guidelines.",
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.316(a), 164.316(b)(1)(i), 164.316(b)(1)(ii), 164.316(b)(2)(ii)',
  },
  {
    id: 'DCF-35',
    category: 'Organization',
    name: 'Security Team Communicates in a Timely Manner',
    description:
      'The security team communicates important information security events to company management in a timely manner.',
    status: 'implemented',
    hipaa: '164.316(a), 164.316(b)(1)(i), 164.316(b)(1)(ii), 164.316(b)(2)(ii)',
  },
  {
    id: 'DCF-42',
    category: 'Organization',
    name: 'Defined Roles and Responsibilities',
    description:
      'Management has defined and documented roles and responsibilities for implementation and oversight of the risk management and compliance programs (e.g., security, privacy, AI, etc.).',
    status: 'implemented',
    soc2: 'CC1.2, CC1.3',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.316(a)',
  },
  {
    id: 'DCF-190',
    category: 'Organization',
    name: 'Designated Security Officials',
    description:
      'Phala Network has formally assigned responsibility for information security in the organization to a Chief Information Security Officer or other security-knowledgeable member of management.',
    status: 'implemented',
    hipaa: '164.308(a)(2), 164.530(a)',
  },
  // Risk Assessment
  {
    id: 'DCF-15',
    category: 'Risk Assessment',
    name: 'Risk Assessment Policy',
    description:
      "Phala Network has defined and documented a process for risk assessment and risk management that outlines the organization's approach for identifying risks and assigning risk owners, the risk acceptance criteria, and the approach for evaluating and treating risks based on the defined criteria.",
    status: 'implemented',
    soc2: 'CC3.1, CC3.2, CC3.3, CC3.4, CC4.2, CC5.3',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(1)(ii)(A), 164.308(a)(1)(ii)(B), 164.316(a)',
  },
  {
    id: 'DCF-16',
    category: 'Risk Assessment',
    name: 'Periodic Risk Assessment',
    description:
      'Phala Network conducts risks assessments periodically as required by company policy and compliance requirements. The risk assessment includes consideration of threats and vulnerabilities and an evaluation of the likelihood and impact for each risk. A risk owner is assigned to each risk, and every risk is assigned a risk treatment option. Results of the risk assessment are documented (e.g., in a risk register).',
    status: 'implemented',
    soc2: 'CC3.1, CC3.2, CC3.3, CC3.4, CC4.2, CC5.1, CC5.2',
    hipaa: '164.308(a)(1)(ii)(A), 164.308(a)(1)(ii)(B), 164.308(a)(8)',
  },
  {
    id: 'DCF-17',
    category: 'Risk Assessment',
    name: 'Risk Treatment Plan',
    description:
      "Phala Network's management has documented a risk treatment plan to formally manage risks identified in risk assessment activities.",
    status: 'implemented',
    soc2: 'CC3.1, CC3.2, CC3.3, CC3.4, CC4.2, CC5.1, CC5.2',
    hipaa: '164.308(a)(1)(ii)(A), 164.308(a)(1)(ii)(B)',
  },
  {
    id: 'DCF-778',
    category: 'Risk Assessment',
    name: 'Fraud Risk Assessment',
    description:
      "Phala Network performs an evaluation of fraud risks at least annually, either as a separate evaluation or as part of the overall enterprise risk assessment. The evaluation of fraud risk is performed in accordance with the company's risk assessment methodology.",
    status: 'implemented',
    soc2: 'CC3.3',
  },
  // Vulnerability Management
  {
    id: 'DCF-18',
    category: 'Vulnerability Management',
    name: 'Vulnerability Scans',
    description:
      'Phala Network conducts vulnerability scans of the production environment as dictated by company policy and compliance requirements. Results are reviewed by company personnel and vulnerabilities are tracked to resolution in accordance with company policies.',
    status: 'implemented',
    soc2: 'CC3.2, CC4.1, CC5.2, CC7.1',
    hipaa: '164.308(a)(1)(ii)(A), 164.308(a)(1)(ii)(B)',
  },
  {
    id: 'DCF-19',
    category: 'Vulnerability Management',
    name: 'Penetration Tests',
    description:
      "An external penetration test of production environments is performed by an independent third party periodically or after any significant infrastructure or application changes. Results are reviewed by management and vulnerabilities are tracked to resolution in accordance with company policies.",
    status: 'implemented',
    soc2: 'CC4.1, CC5.2, CC7.1',
    hipaa: '164.308(a)(1)(ii)(A), 164.308(a)(1)(ii)(B), 164.308(a)(8)',
  },
  {
    id: 'DCF-183',
    category: 'Vulnerability Management',
    name: 'Vulnerability Management Policy',
    description:
      "Phala Network has a defined policy that establishes requirements for vulnerability management across the organization, including monitoring, cataloging, and assigning risk ratings to vulnerabilities to prioritize remediation efforts.",
    status: 'implemented',
    soc2: 'CC5.3, CC7.1',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.316(a)',
  },
  // Asset Management
  {
    id: 'DCF-20',
    category: 'Asset Management',
    name: 'Asset Inventory',
    description:
      'A centralized asset register is maintained for physical, cloud, and other assets that includes descriptive attributes for asset accountability such as owner, description, location, classification, and/or other information based on the type of asset. Processes are in place to maintain an updated inventory through manual reviews (e.g., as a result of new purchases, installations, removals, system changes, etc.) or automated mechanisms.',
    status: 'implemented',
    soc2: 'CC2.1, CC6.1',
    hipaa: '164.310(d)(2)(iii)',
  },
  {
    id: 'DCF-182',
    category: 'Asset Management',
    name: 'Asset Management Policy',
    description:
      'Phala Network has established and documented a policy that outlines requirements for the management and tracking of company assets.',
    status: 'implemented',
    soc2: 'CC5.3',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.310(d)(1), 164.310(d)(2)(i), 164.310(d)(2)(ii), 164.310(d)(2)(iii), 164.316(a)',
  },
  // Architecture & Documentation
  {
    id: 'DCF-21',
    category: 'Architecture & Documentation',
    name: 'Architectural Diagram',
    description:
      'A documented architectural diagram is in place to document system boundaries and support the functioning of internal control. The diagram is reviewed and approved by management at least annually and updated as necessary when there are changes to the environment.',
    status: 'implemented',
    hipaa: '164.308(a)(4)(ii)(A)',
  },
  {
    id: 'DCF-22',
    category: 'Architecture & Documentation',
    name: 'Network Diagram',
    description:
      'A documented network diagram is in place to document system boundaries and connections to external networks. The diagram is reviewed and approved by management at least annually and updated as necessary when there are changes to the environment.',
    status: 'implemented',
    soc2: 'CC2.1',
    hipaa: '164.306(e), 164.316(b)(1)(i), 164.316(b)(1)(ii)',
  },
  // Business Continuity & Disaster Recovery
  {
    id: 'DCF-25',
    category: 'Business Continuity & Disaster Recovery',
    name: 'Disaster Recovery Plan',
    description:
      'Phala Network has a documented disaster recovery plan that outlines roles, responsibilities and detailed procedures for recovery of systems in the event of a disaster scenario.',
    status: 'implemented',
    soc2: 'CC5.3, CC9.1',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(7)(i), 164.308(a)(7)(ii)(B), 164.308(a)(7)(ii)(C), 164.310(a)(2)(i), 164.310(d)(2)(iv), 164.312(a)(2)(ii), 164.316(a)',
  },
  {
    id: 'DCF-26',
    category: 'Business Continuity & Disaster Recovery',
    name: 'BCP/DR Tests',
    description:
      'Phala Network conducts tests of the business continuity/disaster recovery plans at least annually. Results and lessons learned are documented, and updates to the plans are made as necessary.',
    status: 'implemented',
    hipaa: '164.308(a)(7)(i), 164.308(a)(7)(ii)(D), 164.312(a)(2)(ii)',
  },
  {
    id: 'DCF-27',
    category: 'Business Continuity & Disaster Recovery',
    name: 'Cloud Resources Availability',
    description:
      'Business-critical cloud resources are deployed in accordance with high availability architecture principles (e.g., replicated across multiple availability zones or regions, configured for high-availability, etc.).',
    status: 'implemented',
    hipaa:
      '164.308(a)(7)(i), 164.308(a)(7)(ii)(A), 164.310(a)(2)(i), 164.310(d)(2)(iv), 164.312(a)(2)(ii)',
  },
  {
    id: 'DCF-166',
    category: 'Business Continuity & Disaster Recovery',
    name: 'Business Continuity Plan',
    description:
      'Phala Network has a defined business continuity plan that outlines strategies for maintaining operations during a disruption.',
    status: 'implemented',
    soc2: 'CC5.3, CC9.1',
    hipaa:
      '164.308(a)(7)(i), 164.308(a)(7)(ii)(B), 164.308(a)(7)(ii)(C), 164.310(a)(2)(i), 164.312(a)(2)(ii)',
  },
  {
    id: 'DCF-167',
    category: 'Business Continuity & Disaster Recovery',
    name: 'Business Impact Analysis',
    description:
      'Phala Network performs a business impact analysis (BIA) periodically to identify criticality, business recovery order, and minimum service levels for key business processes and assets. Results of the business impact analysis are documented and incorporated into business continuity and disaster recovery plans.',
    status: 'implemented',
    hipaa:
      '164.308(a)(7)(i), 164.308(a)(7)(ii)(B), 164.308(a)(7)(ii)(C), 164.308(a)(7)(ii)(E), 164.312(a)(2)(ii)',
  },
  // Incident Response
  {
    id: 'DCF-28',
    category: 'Incident Response',
    name: 'Security Events Tracked and Evaluated',
    description:
      'Phala Network evaluates security events to determine if they constitute an incident. Incidents are assigned a priority, categorized, documented, tracked, escalated, contained, eradicated, communicated, and resolved in accordance with company policies and procedures.',
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.316(a)',
  },
  {
    id: 'DCF-29',
    category: 'Incident Response',
    name: 'Incident Response Team',
    description:
      'Phala Network has identified and documented roles and responsibilities for incident management (e.g., roles and responsibilities for invoking the incident management process, incident leads, incident handlers, communication coordinators, technical advisors, legal advisors, etc.).',
    status: 'implemented',
    soc2: 'CC7.3, CC7.4, CC7.5',
    hipaa: '164.308(a)(6)(i), 164.308(a)(6)(ii)',
  },
  {
    id: 'DCF-30',
    category: 'Incident Response',
    name: 'Incident Response Lessons Learned Documented',
    description:
      'Phala Network documents a post-mortem review for identified incidents that includes incident metadata, root-cause analysis, documentation of evidence, summary of containment, eradication, and recovery actions, timelines, incident metrics, evidence of internal and external communications, estimation of impact and scope, and lessons learned, as applicable, in accordance with company policies and procedures.',
    status: 'implemented',
    soc2: 'CC7.3, CC7.4, CC7.5',
  },
  {
    id: 'DCF-131',
    category: 'Incident Response',
    name: 'Incident Report Template and Process',
    description:
      'Phala Network has incident management procedures that include detailed instructions on how to escalate a suspected incident to the Information Security Team and, when necessary, to the Privacy or Legal department. Phala Network has a standard incident report template that must be completed for each incident.',
    status: 'implemented',
    hipaa: '164.308(a)(6)(i), 164.308(a)(6)(ii)',
  },
  {
    id: 'DCF-135',
    category: 'Incident Response',
    name: 'Notification of Incidents or Breaches',
    description:
      'Phala Network provides communications about breaches and incidents to affected parties, organizational officials, authorities, and other internal and external stakeholders, in accordance with company policies and procedures and contractual and legal obligations.',
    status: 'implemented',
    soc2: 'CC7.3, CC7.4, CC7.5',
    hipaa:
      '164.402, 164.404(a), 164.404(b), 164.404(c), 164.404(d), 164.406, 164.408, 164.410, 164.412, 164.414(a), 164.414(b)',
  },
  {
    id: 'DCF-154',
    category: 'Incident Response',
    name: 'Incident Response Test',
    description:
      'Phala Network performs a test of all components of the incident response plan and procedures at least annually through different mechanisms (e.g., walk-through or tabletop exercises, simulations, etc.). The documented plan and procedures are updated if necessary based on the results of the test.',
    status: 'implemented',
    soc2: 'CC7.3, CC7.4, CC7.5',
    hipaa: '164.308(a)(6)(i), 164.308(a)(6)(ii)',
  },
  {
    id: 'DCF-159',
    category: 'Incident Response',
    name: 'Incident Response Plan',
    description:
      'Phala Network has a documented an incident response plan that outlines roles, responsibilities, and procedures to document, analyze, categorize, and respond to incidents. The incident response plan reviewed periodically and updated as needed according to lessons learned from previous incidents and industry developments.',
    status: 'implemented',
    soc2: 'CC7.3, CC7.4, CC7.5, CC9.1',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(6)(i), 164.308(a)(6)(ii), 164.316(a), 164.402',
  },
  // Software Development
  {
    id: 'DCF-31',
    category: 'Software Development',
    name: 'Software Development Policies',
    description:
      'Phala Network has developed policies and procedures governing the system development life cycle, including requirements, design, implementation, testing, and deployment.',
    status: 'implemented',
    soc2: 'CC8.1',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.316(a), 164.530(c)',
  },
  // Personnel Security
  {
    id: 'DCF-36',
    category: 'Personnel Security',
    name: 'Periodic Security Training',
    description:
      'Phala Network has established training programs to help personnel gain awareness of information security best practices. Personnel (including employees and contractors as applicable) are required to complete the training during onboarding. Periodic refresher training is provided to personnel at least annually and as deemed necessary (e.g., upon changes in security requirements, policies, regulations, etc.).',
    status: 'implemented',
    soc2: 'CC1.4, CC2.2, CC5.2',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(5)(i), 164.316(a), 164.402, 164.530(b)',
  },
  {
    id: 'DCF-37',
    category: 'Personnel Security',
    name: 'Acceptable Use Policy',
    description:
      "Phala Network has a documented acceptable use policy that outlines requirements for personnel's usage of company assets.",
    status: 'implemented',
    soc2: 'CC5.3',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(5)(ii)(B), 164.310(b), 164.316(a)',
  },
  {
    id: 'DCF-38',
    category: 'Personnel Security',
    name: 'Performance Evaluations',
    description:
      'Management conducts periodic evaluations of performance against established goals and objectives for eligible personnel in accordance with company policies and procedures.',
    status: 'implemented',
    soc2: 'CC1.1, CC1.4, CC1.5',
  },
  {
    id: 'DCF-39',
    category: 'Personnel Security',
    name: 'Background Checks',
    description:
      'Background checks are conducted on eligible personnel (employees and third parties as deemed necessary by the organization) prior to hire as permitted by local laws.',
    status: 'implemented',
    soc2: 'CC1.1',
    hipaa: '164.308(a)(3)(ii)(B)',
  },
  {
    id: 'DCF-40',
    category: 'Personnel Security',
    name: 'Contractor Requirements',
    description:
      'Phala Network requires its contractors to read and acknowledge the Code of Conduct, read and acknowledge the Acceptable Use Policy, and pass a background check.',
    status: 'implemented',
    hipaa: '164.308(b)(1)',
  },
  {
    id: 'DCF-43',
    category: 'Personnel Security',
    name: 'Termination/Offboarding Checklist',
    description:
      "Phala Network uses a termination checklist to ensure that an employee's system access, including physical access, is removed within a specified timeframe and all organization assets (physical or electronic) are properly returned.",
    status: 'implemented',
    hipaa:
      '164.308(a)(3)(ii)(A), 164.308(a)(3)(ii)(C), 164.308(a)(4)(i), 164.308(a)(4)(ii)(A), 164.308(a)(4)(ii)(B), 164.308(a)(4)(ii)(C), 164.312(a)(1)',
  },
  {
    id: 'DCF-44',
    category: 'Personnel Security',
    name: 'Code of Conduct',
    description:
      "Phala Network maintains a documented code of conduct. Eligible personnel are required to acknowledge Phala Network's code of conduct during onboarding and annually thereafter.",
    status: 'implemented',
    soc2: 'CC1.1, CC1.4, CC1.5, CC2.2, CC5.3',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.316(a)',
  },
  {
    id: 'DCF-105',
    category: 'Personnel Security',
    name: 'Personnel Non-Disclosure Agreements (NDA)',
    description:
      'Personnel, including employees and contractors, are required to sign an agreement that outlines confidentiality requirements (e.g., non-disclosure agreements) prior to hire.',
    status: 'implemented',
    soc2: 'CC1.1, CC2.3',
  },
  {
    id: 'DCF-179',
    category: 'Personnel Security',
    name: 'Competence Records',
    description:
      'Phala Network has identified and documented skill and competence requirements for personnel that contribute to the development, implementation and oversight of its management system(s) and retains documented evidence of competence.',
    status: 'implemented',
    hipaa: '164.308(a)(2)',
  },
  {
    id: 'DCF-196',
    category: 'Personnel Security',
    name: 'HIPAA Awareness Training',
    description:
      'Phala Network has established a training program for the use and disclosure of protected health information (PHI) to help personnel understand their obligations and responsibilities related to HIPAA. All eligible members of the workforce are required to complete this training during onboarding and annually thereafter.',
    status: 'implemented',
    hipaa: '164.308(a)(5)(i), 164.530(b)',
  },
  // Data Protection
  {
    id: 'DCF-45',
    category: 'Data Protection',
    name: 'Data Protection Policy',
    description:
      'Phala Network has a documented a policy that outlines the procedures and technical measures to be implemented at the organization to protect the confidentiality, integrity, and availability of data.',
    status: 'implemented',
    soc2: 'CC6.7',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(1)(ii)(D), 164.308(a)(5)(ii)(C), 164.312(c)(1), 164.312(c)(2), 164.312(e)(2)(i), 164.312(e)(2)(ii), 164.316(a), 164.316(b)(2)(i)',
  },
  {
    id: 'DCF-101',
    category: 'Data Protection',
    name: 'Data Retention Policy',
    description:
      'Phala Network has a documented and implemented a policy for data retention defining the types of data (including company and customer data) and the period of time for which they should be retained.',
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.316(a), 164.316(b)(2)(i)',
  },
  {
    id: 'DCF-102',
    category: 'Data Protection',
    name: 'Data Classification Policy',
    description:
      'Phala Network has established a data classification policy in order to identify the types of information stored or processed by the organization and the protection measures that are required for each.',
    status: 'implemented',
    soc2: 'CC2.1',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.316(a)',
  },
  {
    id: 'DCF-103',
    category: 'Data Protection',
    name: 'Customer Data Deletion Upon Termination',
    description:
      'Phala Network disposes of customer data upon termination of services in accordance with contractual agreements.',
    status: 'implemented',
    hipaa: '164.316(b)(2)(i)',
  },
  {
    id: 'DCF-123',
    category: 'Data Protection',
    name: 'Procedures for Information Disposal',
    description:
      'Phala Network has documented policies and procedures for erasure or destruction of information that has been identified for disposal.',
    status: 'implemented',
    soc2: 'CC6.5',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.316(a)',
  },
  {
    id: 'DCF-150',
    category: 'Data Protection',
    name: 'Data Loss Prevention (DLP) Mechanisms',
    description:
      'Phala Network has implemented data leakage prevention mechanisms to systems that could process, store or transmit sensitive information (e.g., sending personal information via email). These mechanisms are configured to prevent data leakage and generate audit logs and alerts.',
    status: 'implemented',
    hipaa: '164.312(a)(2)(iv), 164.312(e)(1)',
  },
  // Endpoint Security
  {
    id: 'DCF-48',
    category: 'Endpoint Security',
    name: 'Screen Lockout',
    description:
      'Company-managed devices are configured to enforce a screensaver lock with after a defined period of inactivity in accordance with company policies and compliance requirements.',
    status: 'implemented',
    hipaa: '164.312(a)(2)(iii)',
  },
  {
    id: 'DCF-49',
    category: 'Endpoint Security',
    name: 'Password Manager',
    description: 'A password manager is installed on all company-managed devices.',
    status: 'implemented',
    hipaa: '164.308(a)(5)(ii)(D)',
  },
  {
    id: 'DCF-50',
    category: 'Endpoint Security',
    name: 'Antimalware Software on Devices',
    description: 'Anti-malware software is installed on all company-managed devices.',
    status: 'implemented',
    soc2: 'CC6.8, CC7.1',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(5)(ii)(B), 164.316(a)',
  },
  {
    id: 'DCF-51',
    category: 'Endpoint Security',
    name: 'Automated Updates on Devices',
    description:
      'Automated operating system (OS) updates are enabled on company-managed devices to install security patches.',
    status: 'implemented',
    soc2: 'CC6.7, CC7.1',
  },
  {
    id: 'DCF-52',
    category: 'Endpoint Security',
    name: 'Hard-Disk Encryption',
    description: 'Hard-disk encryption is enabled on all company-managed devices.',
    status: 'implemented',
    soc2: 'CC6.1, CC6.7',
    hipaa: '164.312(a)(2)(iv)',
  },
  // Encryption
  {
    id: 'DCF-53',
    category: 'Encryption',
    name: 'Cryptography Policies',
    description:
      'Phala Network has an established policy and procedures that governs the use of cryptographic controls.',
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.316(a)',
  },
  {
    id: 'DCF-54',
    category: 'Encryption',
    name: 'Encryption at Rest',
    description: 'Data at rest is encrypted using strong cryptographic algorithms.',
    status: 'implemented',
    soc2: 'CC6.1, CC6.6',
    hipaa: '164.312(a)(2)(iv), 164.312(e)(2)(ii)',
  },
  {
    id: 'DCF-55',
    category: 'Encryption',
    name: 'Encryption in Transit',
    description: 'Data in transit is encrypted using strong cryptographic algorithms.',
    status: 'implemented',
    soc2: 'CC6.1, CC6.6, CC6.7',
    hipaa: '164.312(a)(2)(iv), 164.312(e)(1)',
  },
  {
    id: 'DCF-93',
    category: 'Encryption',
    name: 'Credential Keys Managed',
    description:
      "Phala Network has an established key management process in place to support the organization's use of cryptographic techniques.",
    status: 'implemented',
    hipaa:
      '164.308(a)(4)(i), 164.308(a)(4)(ii)(A), 164.308(a)(4)(ii)(B), 164.312(a)(1), 164.312(a)(2)(iv)',
  },
  {
    id: 'DCF-149',
    category: 'Encryption',
    name: 'Removable Media Device Encryption',
    description:
      'Phala Network encrypts removable media devices, such as USB drives, digital video disks, compact disks, external or removable hard disks, etc., that contain sensitive data, to protect the confidentiality of the information during transport.',
    status: 'implemented',
    hipaa: '164.312(a)(2)(iv)',
  },
  {
    id: 'DCF-181',
    category: 'Encryption',
    name: 'Encryption Policy',
    description:
      'Phala Network has a documented policy that establishes requirements for the use of cryptographic controls.',
    status: 'implemented',
    soc2: 'CC5.3, CC6.1',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.312(a)(2)(iv), 164.312(c)(1), 164.312(e)(1), 164.312(e)(2)(i), 164.312(e)(2)(ii), 164.316(a)',
  },
  // Vendor Management
  {
    id: 'DCF-56',
    category: 'Vendor Management',
    name: 'Vendor Register and Agreements',
    description:
      'Phala Network maintains a vendor/third party register that includes a complete and accurate list of vendors/third parties, relationship owners, description for each of the services provided, risk ratings, results of vendor/third party risk management activities, etc. Phala Network executes agreements with vendors and service providers involved in accessing, processing, storing or managing information assets that outline the responsibilities of each vendor or service provider.',
    status: 'implemented',
    soc2: 'CC3.2, CC9.2',
    hipaa:
      '164.314(a)(1), 164.314(a)(2)(i)(A), 164.314(a)(2)(i)(B), 164.314(a)(2)(i)(C), 164.314(a)(2)(ii), 164.314(a)(2)(iii)',
  },
  {
    id: 'DCF-57',
    category: 'Vendor Management',
    name: 'Vendor Compliance Monitoring',
    description:
      "Phala Network obtains and reviews compliance reports or other evidence for critical vendors and service providers at least annually to monitor the third parties' compliance with industry frameworks, regulations, standards (e.g., SOC 2, ISO, PCI DSS, etc.) and Phala Network's requirements. Results of the review and action items, if any, are documented.",
    status: 'implemented',
    soc2: 'CC3.2, CC9.2',
    hipaa:
      '164.308(b)(1), 164.314(a)(1), 164.314(a)(2)(i)(A), 164.314(a)(2)(i)(B), 164.314(a)(2)(i)(C)',
  },
  {
    id: 'DCF-168',
    category: 'Vendor Management',
    name: 'Vendor Management Policy',
    description:
      'Phala Network has a documented policy that outlines requirements for managing vendor and third-party relationships through their entire life cycle.',
    status: 'implemented',
    soc2: 'CC9.2',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(b)(1), 164.314(a)(1), 164.314(a)(2)(i)(A), 164.314(a)(2)(i)(B), 164.314(a)(2)(i)(C), 164.314(a)(2)(ii), 164.314(a)(2)(iii), 164.314(b)(1), 164.314(b)(2)(i), 164.314(b)(2)(ii), 164.314(b)(2)(iii), 164.314(b)(2)(iv), 164.316(a), 164.504(e), 164.504(f)',
  },
  // Authentication
  {
    id: 'DCF-58',
    category: 'Authentication',
    name: 'Centralized Authentication and Account Management',
    description:
      'Phala Network has implemented systems or mechanisms to centralize authentication and account management across the organization (e.g., directory service, identity provider, etc.).',
    status: 'implemented',
    hipaa: '164.312(a)(2)(i), 164.312(c)(1), 164.312(e)(2)(i)',
  },
  {
    id: 'DCF-60',
    category: 'Authentication',
    name: 'Secure Password Storage',
    description:
      'Phala Network has implemented technical measures to protect stored user passwords for the system (e.g., encryption, hashing, salting, etc.).',
    status: 'implemented',
    hipaa: '164.308(a)(5)(ii)(D)',
  },
  {
    id: 'DCF-62',
    category: 'Authentication',
    name: 'Session Termination',
    description:
      "Phala Network's systems automatically terminate a user's logical session based on predefined conditions (e.g., predefined periods of inactivity, closure of the system or internet browser, etc.).",
    status: 'implemented',
    hipaa: '164.312(a)(2)(iii)',
  },
  {
    id: 'DCF-124',
    category: 'Authentication',
    name: 'Require Authentication for Access',
    description:
      "Users accessing their personal information through Phala Network's application must be authenticated with a username and password.",
    status: 'implemented',
    hipaa:
      '164.312(a)(2)(i), 164.522(a)(1), 164.522(a)(2), 164.522(a)(3), 164.522(b), 164.524(a)(1), 164.524(a)(2), 164.524(a)(3), 164.524(a)(4), 164.524(b), 164.524(c), 164.524(d)(1), 164.524(d)(2), 164.524(d)(3), 164.524(d)(4), 164.524(e)',
  },
  // Customer Communication
  {
    id: 'DCF-63',
    category: 'Customer Communication',
    name: 'Terms of Service',
    description:
      'Phala Network maintains a publicly available terms of service for use of the system. All users must agree to the terms of service prior to using the system.',
    status: 'implemented',
    soc2: 'CC2.3',
  },
  {
    id: 'DCF-64',
    category: 'Customer Communication',
    name: 'Commitments Communicated to Customers',
    description:
      'Phala Network communicates service commitments and system requirements to customers and other external parties, as appropriate, through contracts, agreements, company website, etc. Phala Network provides notification to relevant parties of any changes to service commitments and system requirements.',
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.316(a)',
  },
  {
    id: 'DCF-74',
    category: 'Customer Communication',
    name: 'Communication of System Changes',
    description:
      "Phala Network communicates system changes via release notes or change log in the company's website or via periodic communications.",
    status: 'implemented',
    soc2: 'CC2.3',
  },
  // Network Security
  {
    id: 'DCF-73',
    category: 'Network Security',
    name: 'Access to Remote Server Administration Ports Restricted',
    description:
      'Network security controls are in place to restrict public access to remote server administration ports (e.g., SSH, RDP) to authorized IP addresses or address ranges only.',
    status: 'implemented',
    hipaa: '164.312(a)(1), 164.312(e)(1)',
  },
  {
    id: 'DCF-85',
    category: 'Network Security',
    name: 'Network Security Controls',
    description:
      'Network security controls are in place to limit inbound and outbound traffic to the environment to only what is necessary based on business justification. All other traffic is specifically denied.',
    status: 'implemented',
    soc2: 'CC6.1, CC6.6',
  },
  {
    id: 'DCF-88',
    category: 'Network Security',
    name: 'Web Application Firewall',
    description:
      'A web application firewall is in place to protect public-facing web applications from outside threats.',
    status: 'implemented',
    soc2: 'CC6.6, CC7.2',
  },
  {
    id: 'DCF-91',
    category: 'Network Security',
    name: 'Intrusion Detection/Prevention System',
    description:
      'An intrusion detection system (IDS)/intrusion prevention system (IPS) or equivalent is in place to detect real-time suspicious or anomalous network traffic that may be indicative of threat actor activity and is configured to alert personnel when a potential intrusion is detected.',
    status: 'implemented',
    soc2: 'CC6.6, CC7.1, CC7.2',
    hipaa: '164.308(a)(5)(ii)(B)',
  },
  {
    id: 'DCF-92',
    category: 'Network Security',
    name: 'Encrypted Remote Production Access',
    description:
      'Remote access to production systems is only available through an encrypted connection (e.g., encrypted virtual private network, SSH, etc.)',
    status: 'implemented',
    soc2: 'CC6.1, CC6.6',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.312(a)(2)(iv), 164.312(e)(1), 164.316(a)',
  },
  // Backup & Recovery
  {
    id: 'DCF-77',
    category: 'Backup & Recovery',
    name: 'Data Backups',
    description:
      'Backups of production data are performed at least daily and are configured to be retained in accordance with the retention periods established in company policies and procedures.',
    status: 'implemented',
    hipaa: '164.308(a)(7)(ii)(A), 164.310(d)(2)(iv)',
  },
  {
    id: 'DCF-98',
    category: 'Backup & Recovery',
    name: 'Backup Storage',
    description:
      'Backups are encrypted and segmented from production systems (e.g., air-gapped, replicated to a different region, stored offsite, etc.) to ensure protection from a disaster or incident.',
    status: 'implemented',
    hipaa: '164.308(a)(7)(ii)(A), 164.310(d)(2)(iv), 164.312(b), 164.312(c)(2)',
  },
  {
    id: 'DCF-99',
    category: 'Backup & Recovery',
    name: 'Backup Monitoring',
    description:
      'Automated notifications are sent to personnel in the event of a backup failure. Backup failures are investigated and resolved by engineering personnel following company policies and procedures.',
    status: 'implemented',
    hipaa: '164.308(a)(7)(ii)(A), 164.310(d)(2)(iv)',
  },
  {
    id: 'DCF-100',
    category: 'Backup & Recovery',
    name: 'Backup Restore Testing',
    description:
      'Phala Network tests the integrity and recoverability of backed-up data at least annually.',
    status: 'implemented',
    hipaa: '164.308(a)(7)(ii)(A), 164.310(d)(2)(iv)',
  },
  {
    id: 'DCF-169',
    category: 'Backup & Recovery',
    name: 'Backup Policy',
    description:
      'Phala Network has defined and documented a backup policy that establishes the requirements for backup information, software and systems.',
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(7)(ii)(A), 164.310(d)(2)(iv), 164.316(a)',
  },
  // Logging & Monitoring
  {
    id: 'DCF-79',
    category: 'Logging & Monitoring',
    name: 'Logging System',
    description:
      'Phala Network uses a centralized system that collects and stores logs of system activity and sends alerts to personnel based on pre-configured rules. Access to logs is restricted to authorized personnel.',
    status: 'implemented',
    soc2: 'CC7.2',
    hipaa: '164.312(b), 164.312(c)(2)',
  },
  {
    id: 'DCF-80',
    category: 'Logging & Monitoring',
    name: 'Log Management System',
    description:
      'Phala Network uses logging software that sends alerts to appropriate personnel. Corrective actions are performed, as necessary, in a timely manner.',
    status: 'implemented',
    hipaa: '164.308(a)(5)(ii)(C), 164.312(b), 164.312(c)(2)',
  },
  {
    id: 'DCF-81',
    category: 'Logging & Monitoring',
    name: 'Databases Monitored and Alarmed',
    description:
      "Phala Network has implemented tools to monitor Phala Network's databases and notify appropriate personnel of any events or incidents based on predetermined criteria. Incidents are escalated per policy.",
    status: 'implemented',
    hipaa: '164.312(b), 164.312(c)(2)',
  },
  {
    id: 'DCF-82',
    category: 'Logging & Monitoring',
    name: 'Messaging Queues Monitored and Alarmed',
    description:
      "Phala Network has implemented tools to monitor Phala Network's messaging queues and notify appropriate personnel of any events or incidents based on predetermined criteria. Incidents are escalated per policy.",
    status: 'implemented',
    hipaa: '164.312(b), 164.312(c)(2)',
  },
  {
    id: 'DCF-83',
    category: 'Logging & Monitoring',
    name: 'NoSQL Database Monitored and Alarmed',
    description:
      "Phala Network has implemented tools to monitor Phala Network's NoSQL databases and notify appropriate personnel of any events or incidents based on predetermined criteria. Incidents are escalated per policy.",
    status: 'implemented',
    hipaa: '164.312(b), 164.312(c)(2)',
  },
  {
    id: 'DCF-84',
    category: 'Logging & Monitoring',
    name: 'Servers Monitored and Alarmed',
    description:
      "Phala Network has implemented tools to monitor Phala Network's servers and notify appropriate personnel of any events or incidents based on predetermined criteria. Incidents are escalated per policy.",
    status: 'implemented',
    hipaa: '164.312(b), 164.312(c)(2)',
  },
  {
    id: 'DCF-86',
    category: 'Logging & Monitoring',
    name: 'System Monitoring',
    description:
      'Production systems and resources are monitored and automated alerts are sent out personnel based on pre-configured rules. Events are triaged to determine if they constitute an incident and escalated per policy if necessary.',
    status: 'implemented',
    hipaa: '164.308(a)(8)',
  },
  {
    id: 'DCF-87',
    category: 'Logging & Monitoring',
    name: 'Threat Detection System',
    description:
      'A threat detection system is in place to monitor web traffic and suspicious activity. When anomalous traffic activity is identified, alerts are automatically sent to personnel, investigated, and escalated through the incident management process, if necessary.',
    status: 'implemented',
    hipaa: '164.312(b), 164.312(c)(2)',
  },
  {
    id: 'DCF-151',
    category: 'Logging & Monitoring',
    name: 'FIM (File Integrity Monitoring) Software in Place',
    description:
      'Phala Network ensures that file integrity monitoring (FIM) software is in place to detect whether operating system and application software files have been tampered with.',
    status: 'implemented',
    hipaa: '164.312(c)(1), 164.312(c)(2)',
  },
  {
    id: 'DCF-160',
    category: 'Logging & Monitoring',
    name: 'Continuous Control Monitoring',
    description:
      "Phala Network uses compliance automation software to identify, select, and continuously monitor internal controls.",
    status: 'implemented',
    soc2: 'CC2.1, CC2.2, CC3.2, CC3.3, CC3.4, CC4.1, CC4.2, CC5.1, CC5.2',
    hipaa: '164.312(b), 164.312(c)(2)',
  },
  {
    id: 'DCF-177',
    category: 'Logging & Monitoring',
    name: 'Event Logging',
    description:
      'Phala Network has a defined plan for event logging that establishes the required criteria for logs, protection of logged information, clock synchronization.',
    status: 'implemented',
    hipaa: '164.308(a)(5)(ii)(C), 164.312(b), 164.312(c)(2)',
  },
  {
    id: 'DCF-189',
    category: 'Logging & Monitoring',
    name: 'Activity Review',
    description:
      'Phala Network performs a review of information system activities on regular intervals',
    status: 'implemented',
    hipaa: '164.308(a)(1)(ii)(D)',
  },
  // Physical Security
  {
    id: 'DCF-94',
    category: 'Physical Security',
    name: 'Physical Security Policy',
    description:
      'Phala Network has a documented policy that outlines requirements for physical security.',
    status: 'implemented',
    soc2: 'CC6.4',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.310(a)(1), 164.310(a)(2)(ii), 164.310(a)(2)(iii), 164.310(a)(2)(iv), 164.310(b), 164.310(c), 164.316(a)',
  },
  {
    id: 'DCF-106',
    category: 'Physical Security',
    name: 'Clean Desk and Clear Screen Policies and Procedures',
    description:
      'Phala Network has defined clear desk and clear screen policies and procedures to protect confidential data (physical and electronic) which are communicated to personnel and enforced across the organization.',
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.316(a)',
  },
  {
    id: 'DCF-107',
    category: 'Physical Security',
    name: 'Disposal of Sensitive Data on Paper',
    description:
      'When Phala Network disposes of hard copy materials, it does so through secure means such as cross-cut shredding, incinerating, or pulping, so that sensitive data cannot be reconstructed.',
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.310(d)(2)(i), 164.310(d)(2)(ii), 164.316(a)',
  },
  {
    id: 'DCF-108',
    category: 'Physical Security',
    name: 'Secure Storage Mechanisms',
    description:
      'Phala Network uses secure storage mechanisms for digital media and hardcopy materials that contain sensitive data (e.g., locked codes, combination locks to offices, rooms and facilities such as key cabinets, etc.) as well as critical equipment and other assets. Access to the secured storage mechanisms (including access to physical keys and knowledge of authentication information) is restricted to authorized personnel.',
    status: 'implemented',
    hipaa: '164.316(b)(2)(i)',
  },
  {
    id: 'DCF-109',
    category: 'Physical Security',
    name: 'Disposal of Sensitive Data on Hardware',
    description:
      'Phala Network disposes of data on hardware through secure means, such as wiping and hard drive destruction, in accordance with documented policies and procedures.',
    status: 'implemented',
    soc2: 'CC6.5',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.310(d)(2)(i), 164.310(d)(2)(ii), 164.316(a)',
  },
  {
    id: 'DCF-147',
    category: 'Physical Security',
    name: 'Physical Access to Facilities is Protected',
    description:
      "Phala Network has security policies that have been approved by management and detail how physical access to the company's headquarters is maintained. These policies are accessible to all employees and contractors.",
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.308(a)(1)(i), 164.308(a)(4)(i), 164.308(a)(4)(ii)(A), 164.308(a)(4)(ii)(B), 164.310(a)(1), 164.310(a)(2)(ii), 164.310(a)(2)(iii), 164.310(b), 164.310(c), 164.312(a)(1), 164.316(a)',
  },
  // Privacy
  {
    id: 'DCF-65',
    category: 'Privacy',
    name: 'Public Privacy Policy',
    description: 'Phala Network maintains a publicly available privacy policy/notice.',
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.316(a)',
  },
  {
    id: 'DCF-112',
    category: 'Privacy',
    name: 'Notice and Acknowledgement of Privacy Practices',
    description:
      'Phala Network provides notice of its privacy practices to users prior to accessing the system. Users are required to explicitly acknowledge the privacy policy prior to entering information into the system.',
    status: 'implemented',
    hipaa:
      '164.520(a), 164.520(b), 164.520(c)(1), 164.520(c)(2), 164.520(c)(3), 164.520(d), 164.520(e)',
  },
  {
    id: 'DCF-113',
    category: 'Privacy',
    name: 'Review Privacy Notice Annually',
    description:
      "Phala Network's management reviews the privacy notice to ensure that the privacy notice is accurate.",
    status: 'implemented',
    hipaa: '164.306(e), 164.316(b)(1)(i), 164.316(b)(1)(ii)',
  },
  {
    id: 'DCF-114',
    category: 'Privacy',
    name: 'Privacy Policy Publicly Available',
    description:
      'Phala Network communicates its Privacy Policy on its public-facing website.',
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.316(a)',
  },
  {
    id: 'DCF-119',
    category: 'Privacy',
    name: 'Allowable Use and Disclosure',
    description:
      'Phala Network maintains policies and procedures that define allowable use and disclosure scenarios.',
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.316(a)',
  },
  {
    id: 'DCF-120',
    category: 'Privacy',
    name: 'Periodic Review of Privacy Policy',
    description:
      "Phala Network's management reviews the online privacy policy and/or notice at least annually to validate its continued suitability and accuracy. The online privacy policy/notice includes the date it was last updated. Phala Network notifies customers of changes to the privacy notice and the nature of the changes, including when personal information will be used for new purposes not previously identified.",
    status: 'implemented',
    hipaa: '164.306(e), 164.316(b)(1)(i), 164.316(b)(1)(ii)',
  },
  {
    id: 'DCF-125',
    category: 'Privacy',
    name: 'Users Can Access All Their Information',
    description:
      'Users can access all of their personal information through the application by navigating to their settings and profile.',
    status: 'implemented',
    hipaa:
      '164.522(a)(1), 164.522(a)(2), 164.522(a)(3), 164.522(b), 164.524(a)(1), 164.524(a)(2), 164.524(a)(3), 164.524(a)(4), 164.524(b), 164.524(c), 164.524(d)(1), 164.524(d)(2), 164.524(d)(3), 164.524(d)(4), 164.524(e)',
  },
  {
    id: 'DCF-126',
    category: 'Privacy',
    name: 'Personal Information Accessible Through System Authentication',
    description:
      'Phala Network provides a mechanism for users to view, correct, and/or delete their personal information by authenticating into the system with a username and password and navigating to their profile settings.',
    status: 'implemented',
    hipaa:
      '164.526(a)(1), 164.526(a)(2), 164.526(b), 164.526(c), 164.526(d), 164.526(e), 164.526(f)',
  },
  {
    id: 'DCF-139',
    category: 'Privacy',
    name: 'Contact Information for Privacy Concerns',
    description:
      "Phala Network informs users about how to contact Phala Network with inquiries, complaints, and disputes via the privacy practices that are posted on the Phala Network's public-facing website.",
    status: 'implemented',
    hipaa: '164.530(d)(1), 164.530(d)(2)',
  },
  {
    id: 'DCF-140',
    category: 'Privacy',
    name: 'Point of Contact for Privacy Inquiries',
    description:
      'Phala Network provides a contact mechanism for data subjects to submit privacy-related requests or report privacy incidents (e.g., email address, customer portal, etc.).',
    status: 'implemented',
    hipaa: '164.530(d)(1), 164.530(d)(2)',
  },
  {
    id: 'DCF-141',
    category: 'Privacy',
    name: 'Privacy Inquiries Tracked',
    description:
      'Phala Network maintains records of privacy rights requests in ticket or log format that includes the date of request, nature of request, manner in which the request was made, the date of the business response, the nature of the response, and the basis for the denial of the request if the request is denied in whole or in part. Records are retained for a defined period in accordance with legal requirements.',
    status: 'implemented',
    hipaa:
      '164.526(a)(1), 164.526(a)(2), 164.526(b), 164.526(c), 164.526(d), 164.526(e), 164.526(f), 164.530(d)(1), 164.530(d)(2)',
  },
  {
    id: 'DCF-142',
    category: 'Privacy',
    name: 'Quarterly Review of Privacy Compliance',
    description:
      'Executive management meets on a quarterly basis to review compliance with privacy practices and privacy regulations.',
    status: 'implemented',
    hipaa: '164.306(e), 164.316(b)(1)(i), 164.316(b)(1)(ii)',
  },
  {
    id: 'DCF-192',
    category: 'Privacy',
    name: 'Privacy, Use, and Disclosure',
    description:
      'Phala Network has a defined policy that establishes the requirements of the HIPAA Privacy Rule',
    status: 'implemented',
    hipaa:
      '164.502(a)(1), 164.502(a)(2), 164.502(a)(3), 164.502(a)(4), 164.502(a)(5)(i), 164.502(a)(5)(ii), 164.502(b)(1), 164.502(b)(2), 164.502(c), 164.502(d)(1), 164.502(d)(2), 164.502(e), 164.502(f), 164.502(g), 164.502(h), 164.502(i), 164.502(j)(1), 164.502(j)(2), 164.504(e), 164.504(f), 164.504(g), 164.506, 164.506(a), 164.506(b), 164.508(a), 164.508(b), 164.508(b)(3), 164.508(b)(4), 164.508(c), 164.510(a), 164.510(a)(3), 164.510(b)(1), 164.510(b)(2), 164.510(b)(3), 164.510(b)(4), 164.510(b)(5), 164.512(a), 164.512(b), 164.512(c), 164.512(d), 164.512(e), 164.512(f)(1), 164.512(f)(2), 164.512(f)(3), 164.512(f)(4), 164.512(f)(5), 164.512(f)(6), 164.512(g), 164.512(h), 164.512(i)(1), 164.512(i)(2), 164.512(j), 164.512(k)(1), 164.512(k)(2), 164.512(k)(3), 164.512(k)(4), 164.512(k)(5), 164.512(k)(6), 164.512(l), 164.514(a), 164.514(d), 164.514(d)(3), 164.514(d)(4), 164.514(d)(5), 164.514(e), 164.514(f), 164.514(g), 164.514(h), 164.520(a), 164.520(b), 164.520(c)(1), 164.520(c)(2), 164.520(c)(3), 164.520(d), 164.520(e), 164.522(a)(1), 164.522(a)(2), 164.522(a)(3), 164.522(b), 164.524(a)(1), 164.524(a)(2), 164.524(a)(3), 164.524(a)(4), 164.524(b), 164.524(c), 164.524(d)(1), 164.524(d)(2), 164.524(d)(3), 164.524(d)(4), 164.524(e), 164.526(a)(1), 164.526(a)(2), 164.526(b), 164.526(c), 164.526(d), 164.526(e), 164.526(f), 164.528(a), 164.528(b), 164.528(c), 164.528(d), 164.530(a), 164.530(b), 164.530(e), 164.530(f), 164.530(g), 164.530(h), 164.530(i), 164.530(j), 164.530(k), 164.532',
  },
  // Third Party Data Sharing
  {
    id: 'DCF-127',
    category: 'Third Party Data Sharing',
    name: 'Privacy Requirements Communicated to Third parties',
    description:
      "Phala Network's privacy policies or other specific instructions for handling personal information, including requirements and procedures to notify Phala Network of breaches or unauthorized disclosures, are communicated to third parties to whom personal information is disclosed.",
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.314(a)(1), 164.314(a)(2)(i)(A), 164.314(a)(2)(i)(B), 164.314(a)(2)(i)(C), 164.316(a)',
  },
  {
    id: 'DCF-128',
    category: 'Third Party Data Sharing',
    name: 'Disclosure with 3rd Parties',
    description:
      "Phala Network discloses personal information only to third parties who have agreements with Phala Network to protect personal information in a manner consistent with the relevant aspects of Phala Network's privacy notice or other specific instructions or requirements.",
    status: 'implemented',
    hipaa:
      '164.314(a)(1), 164.314(a)(2)(i)(A), 164.314(a)(2)(i)(B), 164.314(a)(2)(i)(C), 164.528(a), 164.528(b), 164.528(c), 164.528(d)',
  },
  {
    id: 'DCF-129',
    category: 'Third Party Data Sharing',
    name: 'PII with 3rd Parties and Vendors',
    description:
      'Phala Network maintains a documented list of third parties and vendors that are authorized to receive or access PII',
    status: 'implemented',
    hipaa:
      '164.314(a)(1), 164.314(a)(2)(i)(A), 164.314(a)(2)(i)(B), 164.314(a)(2)(i)(C), 164.528(a), 164.528(b), 164.528(c), 164.528(d)',
  },
  {
    id: 'DCF-132',
    category: 'Third Party Data Sharing',
    name: 'Privacy and Security Requirements in Third-Party Agreements',
    description:
      'Phala Network shares information with vendors and third parties only when an executed agreement (e.g., service agreements, business associate agreements, data processing agreements, etc.) is in place that includes security, confidentiality, and privacy requirements for the transfer and processing of information.',
    status: 'implemented',
    hipaa:
      '164.308(b)(1), 164.308(b)(3), 164.314(a)(1), 164.314(a)(2)(i)(A), 164.314(a)(2)(i)(B), 164.314(a)(2)(i)(C)',
  },
  {
    id: 'DCF-133',
    category: 'Third Party Data Sharing',
    name: 'Unauthorized Disclosures by 3rd Parties',
    description:
      'Phala Network requires vendors and third parties with access to personal information to sign a formal contract that requires them to notify Phala Network in the event of actual or suspected unauthorized disclosures of personal information',
    status: 'implemented',
    hipaa:
      '164.314(a)(1), 164.314(a)(2)(i)(A), 164.314(a)(2)(i)(B), 164.314(a)(2)(i)(C)',
  },
  {
    id: 'DCF-134',
    category: 'Third Party Data Sharing',
    name: '3rd Parties and Vendors Given Instructions on Breach Reporting',
    description:
      'Phala Network provides vendors and third parties with information on how to report breaches to Phala Network.',
    status: 'implemented',
    hipaa:
      '164.314(a)(1), 164.314(a)(2)(i)(A), 164.314(a)(2)(i)(B), 164.314(a)(2)(i)(C), 164.402',
  },
  {
    id: 'DCF-136',
    category: 'Third Party Data Sharing',
    name: 'Use of Subprocessors Communicated',
    description:
      "Phala Network communicates to customers any use of subprocessors to process PII (e.g., through a list of subprocessors in the company website or data processing agreement, etc.). Phala Network obtains authorization from customers for the use of subprocessors (e.g., through executed data processing agreements, accepting the terms in the website, etc.).",
    status: 'implemented',
    hipaa:
      '164.306(a), 164.306(b), 164.306(c), 164.306(d), 164.306(e), 164.316(a)',
  },
  // Governance
  {
    id: 'DCF-143',
    category: 'Governance',
    name: 'Board Oversight Briefings Conducted',
    description:
      "The company's board of directors or a relevant subcommittee is briefed by senior management at least annually on the state of the company's cybersecurity and privacy risk. The board provides feedback and direction to management as needed.",
    status: 'implemented',
    hipaa: '164.308(a)(8)',
  },
  {
    id: 'DCF-146',
    category: 'Governance',
    name: 'Board Meetings',
    description:
      "The company's board of directors, owners, senior leadership, or equivalent body, meets at least annually with management to review company performance, strategic objectives, compliance initiatives, and security and privacy risk and mitigation strategies. Meeting minutes, including decisions made and action items, are documented.",
    status: 'implemented',
    soc2: 'CC1.2, CC2.2, CC2.3, CC4.2',
  },
  {
    id: 'DCF-153',
    category: 'Governance',
    name: 'Conduct Control Self-Assessments',
    description:
      'Phala Network performs control self-assessments at least annually to gain assurance that controls are in place and operating effectively. Corrective actions are taken based on relevant findings.',
    status: 'implemented',
    hipaa: '164.308(a)(8)',
  },
  // Security Updates
  {
    id: 'DCF-152',
    category: 'Security Updates',
    name: 'Automated Security Updates',
    description:
      'Phala Network has implemented automated mechanisms (e.g., unattended upgrades, automated patching tools, etc.) to install security fixes to systems.',
    status: 'implemented',
    soc2: 'CC6.8, CC8.1',
  },
  {
    id: 'DCF-191',
    category: 'Security Updates',
    name: 'Security Updates',
    description:
      'Phala Network has documented procedures for periodic communication of security updates and reminders to all personnel, and other interested parties when appropriate',
    status: 'implemented',
    hipaa: '164.308(a)(5)(ii)(A)',
  },
  // HIPAA Specific
  {
    id: 'DCF-193',
    category: 'HIPAA Specific',
    name: 'Breach Notification',
    description:
      "Phala Network information security policies should be augmented by a statement concerning support for and commitment to achieving compliance with applicable PII protection legislation and the contractual terms agreed between the public cloud PII processor and its clients (cloud service customers).",
    status: 'implemented',
    hipaa:
      '164.402, 164.404(a), 164.404(b), 164.404(c), 164.404(d), 164.406, 164.408, 164.410, 164.412, 164.414(a), 164.414(b)',
  },
  {
    id: 'DCF-194',
    category: 'HIPAA Specific',
    name: 'Group Health Plans',
    description:
      'Phala Network has a defined policy that establishes the requirements related to Group Health Plans',
    status: 'implemented',
    hipaa:
      '164.314(b)(1), 164.314(b)(2)(i), 164.314(b)(2)(ii), 164.314(b)(2)(iii), 164.314(b)(2)(iv)',
  },
  {
    id: 'DCF-195',
    category: 'HIPAA Specific',
    name: 'Business Associate Agreements',
    description:
      'Phala Network has a defined policy that establishes the requirements related to Business Associate Agreements',
    status: 'implemented',
    hipaa:
      '164.314(a)(1), 164.314(a)(2)(i)(A), 164.314(a)(2)(i)(B), 164.314(a)(2)(i)(C), 164.314(a)(2)(ii), 164.314(a)(2)(iii)',
  },
  {
    id: 'DCF-197',
    category: 'HIPAA Specific',
    name: 'Document Retention Period',
    description:
      "Phala Network retains HIPAA-related policies and procedures for at least 6 years from the date of the document's creation or when it was last in effect (whichever is later).",
    status: 'implemented',
    hipaa: '164.316(b)(2)(i), 164.520(e), 164.522(a)(3), 164.530(j)',
  },
]

// Subprocessors from DPA
export const subprocessors: Subprocessor[] = [
  {
    name: 'Google Cloud',
    purpose: 'Infrastructure hosting',
    jurisdiction: 'US, EU',
    website: 'https://cloud.google.com',
  },
  {
    name: 'LinkedIn',
    purpose: 'Marketing analytics',
    jurisdiction: 'US',
    website: 'https://linkedin.com',
  },
  {
    name: 'PostHog',
    purpose: 'Product analytics',
    jurisdiction: 'US/EU',
    website: 'https://posthog.com',
  },
  {
    name: 'Stripe',
    purpose: 'Payment processing',
    jurisdiction: 'US',
    website: 'https://stripe.com',
  },
  {
    name: 'Attio',
    purpose: 'CRM',
    jurisdiction: 'UK',
    website: 'https://attio.com',
  },
  {
    name: 'Customer.io',
    purpose: 'Marketing & Email services',
    jurisdiction: 'US',
    website: 'https://customer.io',
  },
  {
    name: 'Fingerprint',
    purpose: 'Security analytics',
    jurisdiction: 'US',
    website: 'https://fingerprint.com',
  },
  {
    name: 'GitHub',
    purpose: 'Code repository and software development platform',
    jurisdiction: 'US',
    website: 'https://github.com',
  },
]

// Get unique categories from controls
export function getControlCategories(): string[] {
  return [...new Set(controls.map((c) => c.category))]
}

// Get controls by category
export function getControlsByCategory(category: string): Control[] {
  return controls.filter((c) => c.category === category)
}
