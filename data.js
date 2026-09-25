// Hello Solar Super Admin - Centralized Shared Data Model
// Connects Customer, Financer, Installer, and Merchant workflows

(function() {
  const STORAGE_KEY = "HELLO_SOLAR_SUPER_ADMIN_DATA_V2";

  const DEFAULT_DATA = {
    customers: [
      { id: "CUS-1001", name: "Maria Elena Cruz", email: "elena.cruz@gmail.com", phone: "+63 917 234 5678", location: "Cebu City", system: "6 kW", status: "Active", appId: "APP-1024", joined: "2026-03-12" },
      { id: "CUS-1002", name: "Ricardo Gomez", email: "rgomez.cebu@yahoo.com", phone: "+63 920 456 7890", location: "Mandaue City", system: "8 kW", status: "Active", appId: "APP-1048", joined: "2026-04-05" },
      { id: "CUS-1003", name: "Andrea Lim", email: "andrea.lim@outlook.com", phone: "+63 918 345 6789", location: "Quezon City", system: "5 kW", status: "Pending Review", appId: "APP-1031", joined: "2026-08-14" },
      { id: "CUS-1004", name: "Joshua Tan", email: "josh.tan@gmail.com", phone: "+63 922 890 1234", location: "Lapu-Lapu City", system: "10 kW", status: "Active", appId: "APP-1050", joined: "2026-05-20" },
      { id: "CUS-1005", name: "Pacific Horizon Logistics", email: "procurement@pacifichorizon.ph", phone: "+63 32 412 8890", location: "Talisay City", system: "18 kW", status: "Active", appId: "APP-1056", joined: "2026-02-18" },
      { id: "CUS-1006", name: "Atty. Fernando Mendoza", email: "atty.mendoza@mendozalaw.ph", phone: "+63 917 889 0123", location: "Quezon City", system: "7 kW", status: "Active", appId: "APP-1062", joined: "2026-06-10" },
      { id: "CUS-1007", name: "Roberto Santos", email: "robert.santos@santosauto.com", phone: "+63 919 678 9012", location: "Cebu City", system: "12 kW", status: "Active", appId: "APP-1070", joined: "2026-01-22" },
      { id: "CUS-1008", name: "Dr. Corazon Valdez", email: "dr.valdez@medicalcity.ph", phone: "+63 915 223 3445", location: "Pasig City", system: "6.5 kW", status: "Pending Review", appId: "APP-1075", joined: "2026-09-18" },
      { id: "CUS-1009", name: "Clara Mendoza", email: "clara.mendoza@gmail.com", phone: "+63 917 555 0891", location: "Cebu City", system: "8.5 kW", status: "Active", appId: "APP-1058", joined: "2026-08-14" }
    ],

    financers: [
      { id: "FIN-001", name: "SunFund Philippines", contact: "Rafael Villanueva", email: "partners@sunfund.ph", phone: "+63 2 8845 2200", activeLoans: 14, totalFunded: 4850000, status: "Active" },
      { id: "FIN-002", name: "BDO Green Energy Financing", contact: "Clarissa Bautista", email: "greenloans@bdo.com.ph", phone: "+63 2 8631 8000", activeLoans: 9, totalFunded: 3420000, status: "Active" },
      { id: "FIN-003", name: "UnionBank Solar Loan Program", contact: "Mark Anthony Reyes", email: "solarcredit@unionbankph.com", phone: "+63 2 8841 8600", activeLoans: 6, totalFunded: 2180000, status: "Active" },
      { id: "FIN-004", name: "Maya Bank Sustainable Energy", contact: "Janice De Leon", email: "credit-ops@mayabank.ph", phone: "+63 2 8845 7788", activeLoans: 4, totalFunded: 1250000, status: "Active" }
    ],

    installers: [
      { id: "INS-001", name: "Hello Solar Internal Team", type: "Internal", contact: "Engr. Limuel Brasona", email: "engineering@hellosolar.ph", phone: "+63 32 238 9001", activeJobs: 2, completedJobs: 28, rating: 4.9, status: "Active" },
      { id: "INS-002", name: "SolarTech Visayas Solutions", type: "Partner", contact: "Dante Alcantara", email: "ops@solartechvisayas.com", phone: "+63 32 414 7712", activeJobs: 2, completedJobs: 19, rating: 4.8, status: "Active" },
      { id: "INS-003", name: "SunPower Masters Cebu", type: "Partner", contact: "Ramon Quisumbing", email: "info@sunpowermasters.ph", phone: "+63 32 340 5566", activeJobs: 2, completedJobs: 14, rating: 4.7, status: "Active" },
      { id: "INS-004", name: "GreenVolt Solutions Corp.", type: "Partner", contact: "Gilbert Soriano", email: "g.soriano@greenvolt.ph", phone: "+63 2 8721 9900", activeJobs: 1, completedJobs: 11, rating: 4.3, status: "Active" },
      { id: "INS-005", name: "Apex Solar Engineering", type: "Partner", contact: "Vicente Morales", email: "vicente@apexsolar.com.ph", phone: "+63 32 505 4421", activeJobs: 0, completedJobs: 8, rating: 4.6, status: "Inactive" }
    ],

    merchants: [
      { id: "MER-019", name: "SolarHub Trading", contact: "Jonathan Co", email: "sales@solarhubtrading.ph", phone: "+63 32 231 6680", projects: 5, transactions: 112, volume: 3840000, status: "Active" },
      { id: "MER-021", name: "Cebu Energy Supply Co.", contact: "Melissa Yap", email: "accounts@cebuenergysupply.com", phone: "+63 32 416 9901", projects: 3, transactions: 67, volume: 2450000, status: "Active" },
      { id: "MER-022", name: "BrightGrid Hardware", contact: "Evelyn Sy", email: "inquiry@brightgrid.ph", phone: "+63 2 8920 1144", projects: 2, transactions: 31, volume: 1120000, status: "Pending Review" },
      { id: "MER-025", name: "SunVenture Renewable Materials", contact: "Paolo Dizon", email: "distribution@sunventure.com", phone: "+63 32 344 8820", projects: 4, transactions: 85, volume: 2900000, status: "Active" }
    ],

    applications: [
      {
        id: "APP-1024",
        customer: "Maria Elena Cruz",
        customerId: "CUS-1001",
        location: "Cebu City",
        system: "6 kW",
        panels: "12x Canadian Solar 500W",
        inverter: "Huawei SUN2000-5KTL",
        stage: "Approved", // Eligible for Hello Solar Direct!
        financer: "SunFund Philippines",
        financerId: "FIN-001",
        installer: "Unassigned",
        installerType: "Partner Installer",
        amount: 315000,
        monthly: 7200,
        docs: "5/5",
        paymentStatus: "On Time",
        nextDue: "2026-10-15",
        updated: "25 mins ago",
        notes: "Credit approved by SunFund. Ready for installer assignment or Hello Solar Direct installation."
      },
      {
        id: "APP-1031",
        customer: "Andrea Lim",
        customerId: "CUS-1003",
        location: "Quezon City",
        system: "5 kW",
        panels: "10x Trina Solar 500W",
        inverter: "Growatt 5000TL",
        stage: "Missing Documents",
        financer: "BDO Green Energy Financing",
        financerId: "FIN-002",
        installer: "Unassigned",
        installerType: "Partner Installer",
        amount: 245000,
        monthly: 5600,
        docs: "3/5",
        paymentStatus: "Due Soon",
        nextDue: "2026-09-30",
        updated: "1 hour ago",
        notes: "Waiting for latest 3-month proof of billing and certificate of employment."
      },
      {
        id: "APP-1048",
        customer: "Ricardo Gomez",
        customerId: "CUS-1002",
        location: "Mandaue City",
        system: "8 kW",
        panels: "16x Jinko Tiger Neo 500W",
        inverter: "Deye 8kW Hybrid",
        stage: "Ready for Installation",
        financer: "UnionBank Solar Loan Program",
        financerId: "FIN-003",
        installer: "SolarTech Visayas Solutions",
        installerType: "Partner Installer",
        amount: 420000,
        monthly: 9600,
        docs: "5/5",
        paymentStatus: "Due Soon",
        nextDue: "2026-09-29",
        updated: "2 hours ago",
        notes: "Assigned to SolarTech Visayas. Pre-installation roof structural inspection completed."
      },
      {
        id: "APP-1050",
        customer: "Joshua Tan",
        customerId: "CUS-1004",
        location: "Lapu-Lapu City",
        system: "10 kW",
        panels: "20x Longi Hi-MO 6 500W",
        inverter: "GoodWe 10kW Hybrid",
        stage: "Approved", // Eligible for Hello Solar Direct!
        financer: "SunFund Philippines",
        financerId: "FIN-001",
        installer: "Unassigned",
        installerType: "Partner Installer",
        amount: 510000,
        monthly: 11800,
        docs: "5/5",
        paymentStatus: "On Time",
        nextDue: "2026-10-20",
        updated: "3 hours ago",
        notes: "Approved financing disbursement. High roof pitch, eligible for Hello Solar Direct Team."
      },
      {
        id: "APP-1056",
        customer: "Pacific Horizon Logistics",
        customerId: "CUS-1005",
        location: "Talisay City",
        system: "18 kW",
        panels: "36x Canadian Solar 500W",
        inverter: "Huawei SUN2000-15KTL",
        stage: "Ready for Installation",
        financer: "BDO Green Energy Financing",
        financerId: "FIN-002",
        installer: "GreenVolt Solutions Corp.",
        installerType: "Partner Installer",
        amount: 920000,
        monthly: 21000,
        docs: "5/5",
        paymentStatus: "Overdue",
        nextDue: "2026-09-12",
        updated: "4 hours ago",
        notes: "Installation delayed due to local utility metering review. Payment overdue by 12 days."
      },
      {
        id: "APP-1062",
        customer: "Atty. Fernando Mendoza",
        customerId: "CUS-1006",
        location: "Quezon City",
        system: "7 kW",
        panels: "14x Trina Vertex 500W",
        inverter: "Huawei SUN2000-6KTL",
        stage: "Ready for Installation",
        financer: "Maya Bank Sustainable Energy",
        financerId: "FIN-004",
        installer: "Hello Solar Internal Team",
        installerType: "Hello Solar Direct",
        amount: 360000,
        monthly: 8300,
        docs: "5/5",
        paymentStatus: "On Time",
        nextDue: "2026-10-05",
        updated: "Yesterday",
        notes: "Accepted for Hello Solar Direct Installation. Internal Engineering Team dispatched for mounting."
      },
      {
        id: "APP-1070",
        customer: "Roberto Santos",
        customerId: "CUS-1007",
        location: "Cebu City",
        system: "12 kW",
        panels: "24x Jinko Solar 500W",
        inverter: "Solis 12kW 3-Phase",
        stage: "Approved",
        financer: "SunFund Philippines",
        financerId: "FIN-001",
        installer: "Hello Solar Internal Team",
        installerType: "Hello Solar Direct",
        amount: 640000,
        monthly: 14700,
        docs: "5/5",
        paymentStatus: "Completed",
        nextDue: "Paid in Full",
        updated: "3 days ago",
        notes: "Commissioned by Hello Solar Direct team. Grid net-metering synchronization operational."
      },
      {
        id: "APP-1075",
        customer: "Dr. Corazon Valdez",
        customerId: "CUS-1008",
        location: "Pasig City",
        system: "6.5 kW",
        panels: "13x Canadian Solar 500W",
        inverter: "Growatt 6000TL",
        stage: "Submitted",
        financer: "UnionBank Solar Loan Program",
        financerId: "FIN-003",
        installer: "Unassigned",
        installerType: "Partner Installer",
        amount: 340000,
        monthly: 7800,
        docs: "4/5",
        paymentStatus: "On Time",
        nextDue: "2026-10-25",
        updated: "5 hours ago",
        notes: "Newly submitted application. Initial credit score passed, awaiting bank document review."
      },
      {
        id: "APP-1082",
        customer: "Island Gateway Resort",
        customerId: "CUS-1004",
        location: "Lapu-Lapu City",
        system: "25 kW",
        panels: "50x Trina Solar 500W",
        inverter: "Huawei 25KTL",
        stage: "Under Review",
        financer: "BDO Green Energy Financing",
        financerId: "FIN-002",
        installer: "Unassigned",
        installerType: "Partner Installer",
        amount: 1350000,
        monthly: 31000,
        docs: "5/5",
        paymentStatus: "On Time",
        nextDue: "2026-10-30",
        updated: "1 day ago",
        notes: "Commercial application undergoing final underwriter risk analysis at BDO."
      },
      {
        id: "APP-1089",
        customer: "Manuel Pangilinan",
        customerId: "CUS-1003",
        location: "Taguig City",
        system: "9 kW",
        panels: "18x Longi 500W",
        inverter: "Deye 8kW",
        stage: "Declined",
        financer: "SunFund Philippines",
        financerId: "FIN-001",
        installer: "Unassigned",
        installerType: "Partner Installer",
        amount: 470000,
        monthly: 10800,
        docs: "2/5",
        paymentStatus: "Overdue",
        nextDue: "2026-09-08",
        updated: "2 days ago",
        notes: "Declined due to debt service ratio limit. Financer record flagged missed initial payment due Sep 8, 2026."
      },
      {
        id: "APP-1094",
        customer: "Teresa Alcantara",
        customerId: "CUS-1002",
        location: "Mandaue City",
        system: "5 kW",
        panels: "10x Canadian Solar 500W",
        inverter: "Growatt 5000TL",
        stage: "Approved", // Eligible for Hello Solar Direct!
        financer: "Maya Bank Sustainable Energy",
        financerId: "FIN-004",
        installer: "Unassigned",
        installerType: "Partner Installer",
        amount: 260000,
        monthly: 6000,
        docs: "5/5",
        paymentStatus: "Due Soon",
        nextDue: "2026-10-01",
        updated: "6 hours ago",
        notes: "Approved and awaiting installer dispatch. Eligible for Hello Solar Direct."
      },
      {
        id: "APP-1102",
        customer: "Northern Coast Cold Storage",
        customerId: "CUS-1001",
        location: "Cebu City",
        system: "30 kW",
        panels: "60x Jinko 500W",
        inverter: "Huawei 30KTL",
        stage: "Ready for Installation",
        financer: "SunFund Philippines",
        financerId: "FIN-001",
        installer: "Hello Solar Internal Team",
        installerType: "Maintenance",
        amount: 1620000,
        monthly: 37200,
        docs: "5/5",
        paymentStatus: "On Time",
        nextDue: "2026-10-18",
        updated: "Just now",
        notes: "Biannual preventive inverter calibration and string thermal imaging inspection."
      },
      {
        id: "APP-1058",
        customer: "Clara Mendoza",
        customerId: "CUS-1009",
        location: "Cebu City",
        system: "8.5 kW",
        panels: "17x Canadian Solar 500W",
        inverter: "Huawei 8KTL",
        stage: "Ready for Installation",
        financer: "SunFund Philippines",
        financerId: "FIN-001",
        installer: "Hello Solar Internal Team",
        installerType: "Hello Solar Direct",
        amount: 430000,
        monthly: 9900,
        docs: "5/5",
        paymentStatus: "On Time",
        nextDue: "2026-10-15",
        updated: "Just now",
        notes: "Approved and ready for internal team schedule assignment."
      }
    ],

    installations: [
      {
        id: "JOB-301",
        appId: "APP-1062",
        customer: "Atty. Fernando Mendoza",
        location: "Quezon City",
        system: "7 kW",
        installer: "Hello Solar Internal Team",
        installerType: "Hello Solar Direct",
        status: "In Progress",
        schedule: "Tomorrow, 8:30 AM",
        leadTech: "Engr. Limuel Brasona",
        notes: "Racking & DC trunking 80% completed. Battery bank installation scheduled."
      },
      {
        id: "JOB-302",
        appId: "APP-1048",
        customer: "Ricardo Gomez",
        location: "Mandaue City",
        system: "8 kW",
        installer: "SolarTech Visayas Solutions",
        installerType: "Partner Installer",
        status: "Scheduled",
        schedule: "Oct 2, 2026",
        leadTech: "Dante Alcantara",
        notes: "Materials staged at customer premises. Roof structural clearance confirmed."
      },
      {
        id: "JOB-303",
        appId: "APP-1070",
        customer: "Roberto Santos",
        location: "Cebu City",
        system: "12 kW",
        installer: "Hello Solar Internal Team",
        installerType: "Hello Solar Direct",
        status: "Completed",
        schedule: "Sep 14, 2026",
        completedDate: "Sep 14, 2026",
        leadTech: "Engr. Limuel Brasona",
        notes: "Fully commissioned and certified. Utility bi-directional meter energized."
      },
      {
        id: "JOB-304",
        appId: "APP-1056",
        customer: "Pacific Horizon Logistics",
        location: "Talisay City",
        system: "18 kW",
        installer: "GreenVolt Solutions Corp.",
        installerType: "Partner Installer",
        status: "Delayed",
        schedule: "Sep 22, 2026",
        leadTech: "Gilbert Soriano",
        delayReason: "Permit Approval",
        notes: "Delayed due to pending distribution utility shutdown permit."
      },
      {
        id: "JOB-305",
        appId: "APP-1058",
        customer: "Clara Mendoza",
        location: "Cebu City",
        system: "8.5 kW",
        installer: "Hello Solar Internal Team",
        installerType: "Hello Solar Direct",
        status: "Ready",
        schedule: "Pending Schedule",
        leadTech: "Unassigned",
        notes: "Materials staged. Ready for date & time assignment by Super Admin."
      },
      {
        id: "JOB-306",
        appId: "APP-1102",
        customer: "Northern Coast Cold Storage",
        location: "Cebu City",
        system: "30 kW",
        installer: "Hello Solar Internal Team",
        installerType: "Maintenance",
        status: "In Progress",
        schedule: "Sep 28, 2026",
        leadTech: "Engr. Limuel Brasona",
        notes: "Periodic inverter firmware upgrade and DC string balance calibration."
      }
    ],

    support: [
      {
        id: "SUP-043",
        accountType: "Customer",
        relatedId: "APP-1024",
        accountName: "Maria Elena Cruz",
        concern: "Billing cycle alignment with electric utility statement",
        priority: "Medium",
        status: "Open",
        created: "2 hours ago",
        createdAt: "2026-09-24T18:00:00",
        assignedTo: "ADMIN (Limuel)",
        notes: "Customer requesting payment date adjustment from 15th to 20th of the month.",
        resolutionNote: null,
        resolvedBy: null,
        resolvedAt: null,
        messages: [
          {
            id: "MSG-043-1",
            sender: "Maria Elena Cruz (Customer)",
            role: "Customer",
            time: "2 hours ago",
            text: "Hello, my monthly electric utility meter reading occurs every 18th of the month. Can we align my solar loan amortization due date from the 15th to the 20th to prevent cash flow mismatch?"
          }
        ],
        history: [
          {
            id: "TH-043-1",
            time: "2 hours ago",
            user: "System",
            action: "Ticket created via Customer Portal",
            type: "create"
          },
          {
            id: "TH-043-2",
            time: "1 hour ago",
            user: "ADMIN (Limuel)",
            action: "Assigned ticket to ADMIN (Limuel) and set priority to Medium",
            type: "assignment"
          }
        ]
      },
      {
        id: "SUP-044",
        accountType: "Installer",
        relatedId: "JOB-304",
        accountName: "GreenVolt Solutions Corp.",
        concern: "Delayed installation permit at Talisay distribution utility",
        priority: "High",
        status: "In Progress",
        created: "3 hours ago",
        createdAt: "2026-09-24T17:00:00",
        assignedTo: "ADMIN (Limuel)",
        notes: "Super Admin intervention requested with local utility desk engineer.",
        resolutionNote: null,
        resolvedBy: null,
        resolvedAt: null,
        messages: [
          {
            id: "MSG-044-1",
            sender: "GreenVolt Solutions Corp. (Installer)",
            role: "Installer",
            time: "3 hours ago",
            text: "We are on standby for installation JOB-304 in Talisay. The distribution utility requires an expedited engineering review endorsement from Hello Solar Super Admin. Permit approval is delaying project kickoff."
          },
          {
            id: "MSG-044-2",
            sender: "ADMIN (Limuel)",
            role: "Admin",
            time: "1 hour ago",
            text: "Received. Contacting local utility regional office engineering desk today to submit expedited project documentation and technical endorsement."
          }
        ],
        history: [
          {
            id: "TH-044-1",
            time: "3 hours ago",
            user: "GreenVolt Solutions Corp.",
            action: "Ticket filed via Installer Portal with High Priority",
            type: "create"
          },
          {
            id: "TH-044-2",
            time: "2.5 hours ago",
            user: "ADMIN (Limuel)",
            action: "Status moved to In Progress by ADMIN (Limuel)",
            type: "status"
          },
          {
            id: "TH-044-3",
            time: "1 hour ago",
            user: "ADMIN (Limuel)",
            action: "Admin sent update response to GreenVolt Solutions Corp.",
            type: "message"
          }
        ]
      },
      {
        id: "SUP-045",
        accountType: "Financer",
        relatedId: "APP-1031",
        accountName: "BDO Green Energy Financing",
        concern: "Missing latest 3 months bank statements & COE verification",
        priority: "High",
        status: "Open",
        created: "4 hours ago",
        createdAt: "2026-09-24T16:00:00",
        assignedTo: "ADMIN (Limuel)",
        notes: "Automated reminder sent to customer. Credit team waiting before final sign-off.",
        resolutionNote: null,
        resolvedBy: null,
        resolvedAt: null,
        messages: [
          {
            id: "MSG-045-1",
            sender: "BDO Green Energy Financing (Financer)",
            role: "Financer",
            time: "4 hours ago",
            text: "Credit evaluation for Andrea Lim (APP-1031) is paused. We are missing the latest 3-month electric utility statement and signed COE verification. Please instruct applicant to submit via portal."
          }
        ],
        history: [
          {
            id: "TH-045-1",
            time: "4 hours ago",
            user: "BDO Green Energy Financing",
            action: "Ticket created via Financer Portal with High Priority",
            type: "create"
          },
          {
            id: "TH-045-2",
            time: "3.5 hours ago",
            user: "ADMIN (Limuel)",
            action: "Assigned ticket to ADMIN (Limuel)",
            type: "assignment"
          }
        ]
      },
      {
        id: "SUP-046",
        accountType: "Merchant",
        relatedId: "MER-021",
        accountName: "Cebu Energy Supply Co.",
        concern: "Purchase order reconciliation for 40x Trina 550W panels batch",
        priority: "Medium",
        status: "In Progress",
        created: "Yesterday",
        createdAt: "2026-09-23T14:30:00",
        assignedTo: "ADMIN (Limuel)",
        notes: "Reconciling delivery receipt #DR-8891 against invoice clearance.",
        resolutionNote: null,
        resolvedBy: null,
        resolvedAt: null,
        messages: [
          {
            id: "MSG-046-1",
            sender: "Cebu Energy Supply Co. (Merchant)",
            role: "Merchant",
            time: "Yesterday",
            text: "Discrepancy noted on PO-9921 delivery receipt #DR-8891. Invoice total reflects 40 units while delivery receipt logged 38 units. Two damaged panels were returned for immediate replacement."
          },
          {
            id: "MSG-046-2",
            sender: "ADMIN (Limuel)",
            role: "Admin",
            time: "Yesterday at 05:20 PM",
            text: "Warehouse manager notified. Awaiting replacement dispatch receipt from supplier before invoice clearance."
          }
        ],
        history: [
          {
            id: "TH-046-1",
            time: "Yesterday",
            user: "Cebu Energy Supply Co.",
            action: "Ticket filed via Merchant Portal",
            type: "create"
          },
          {
            id: "TH-046-2",
            time: "Yesterday at 04:00 PM",
            user: "ADMIN (Limuel)",
            action: "Moved ticket to In Progress",
            type: "status"
          }
        ]
      },
      {
        id: "SUP-047",
        accountType: "Customer",
        relatedId: "APP-1062",
        accountName: "Atty. Fernando Mendoza",
        concern: "Inquiry regarding Hello Solar Direct team site arrival schedule",
        priority: "Low",
        status: "Resolved",
        created: "2 days ago",
        createdAt: "2026-09-22T10:00:00",
        assignedTo: "ADMIN (Limuel)",
        notes: "Dispatch manager confirmed arrival window of 8:30 AM tomorrow with customer.",
        resolutionNote: "Dispatch manager confirmed arrival window of 8:30 AM tomorrow with customer.",
        resolvedBy: "ADMIN (Limuel)",
        resolvedAt: "Sep 23, 2026, 04:15 PM",
        messages: [
          {
            id: "MSG-047-1",
            sender: "Atty. Fernando Mendoza (Customer)",
            role: "Customer",
            time: "2 days ago",
            text: "Good day, what time will the Hello Solar Direct installation crew arrive at our Talisay site tomorrow?"
          },
          {
            id: "MSG-047-2",
            sender: "ADMIN (Limuel)",
            role: "Admin",
            time: "Yesterday at 04:15 PM",
            text: "Good day Atty. Mendoza, our direct team lead Engr. Limuel Brasona has confirmed arrival between 8:30 AM and 9:00 AM."
          }
        ],
        history: [
          {
            id: "TH-047-1",
            time: "2 days ago",
            user: "Atty. Fernando Mendoza",
            action: "Ticket created via Customer Portal",
            type: "create"
          },
          {
            id: "TH-047-2",
            time: "Yesterday at 04:15 PM",
            user: "ADMIN (Limuel)",
            action: "Resolution note recorded: Dispatch manager confirmed arrival window of 8:30 AM tomorrow with customer.",
            type: "resolution"
          },
          {
            id: "TH-047-3",
            time: "Yesterday at 04:15 PM",
            user: "ADMIN (Limuel)",
            action: "Ticket marked as Resolved",
            type: "status"
          }
        ]
      },
      {
        id: "SUP-048",
        accountType: "Installer",
        relatedId: "JOB-305",
        accountName: "SunPower Masters Cebu",
        concern: "Net metering bi-directional meter testing appointment notice",
        priority: "Medium",
        status: "Open",
        created: "5 hours ago",
        createdAt: "2026-09-24T15:00:00",
        assignedTo: "ADMIN (Limuel)",
        notes: "Customer presence needed for utility inspector meter seal verification.",
        resolutionNote: null,
        resolvedBy: null,
        resolvedAt: null,
        messages: [
          {
            id: "MSG-048-1",
            sender: "SunPower Masters Cebu (Installer)",
            role: "Installer",
            time: "5 hours ago",
            text: "Distribution utility scheduled bi-directional meter calibration for JOB-305 on Oct 2 at 10:00 AM. Please ensure homeowner or authorized representative is on-site."
          }
        ],
        history: [
          {
            id: "TH-048-1",
            time: "5 hours ago",
            user: "SunPower Masters Cebu",
            action: "Ticket created via Installer Portal",
            type: "create"
          },
          {
            id: "TH-048-2",
            time: "4.5 hours ago",
            user: "ADMIN (Limuel)",
            action: "Assigned ticket to ADMIN (Limuel)",
            type: "assignment"
          }
        ]
      }
    ],

    activity: [
      {
        id: "ACT-801",
        timestamp: "2026-09-25T14:38:00+08:00",
        exactTime: "Sep 25, 2026 · 2:38 PM",
        role: "Financer",
        actorId: "FIN-001",
        user: "FIN-001 (SunFund)",
        action: "Approved financing credit check for APP-1024",
        record: "APP-1024",
        recordType: "Application",
        details: { stage: "Approved", creditScore: "Tier 1 Compliant", financer: "SunFund Solar Financing" }
      },
      {
        id: "ACT-802",
        timestamp: "2026-09-25T14:22:00+08:00",
        exactTime: "Sep 25, 2026 · 2:22 PM",
        role: "Installer",
        actorId: "INS-002",
        user: "INS-002 (SolarTech)",
        action: "Completed roof pre-inspection for APP-1048",
        record: "JOB-302",
        recordType: "Installation",
        details: { inspectionStatus: "Passed", structuralIntegrity: "Approved", job: "JOB-302" }
      },
      {
        id: "ACT-803",
        timestamp: "2026-09-25T14:05:00+08:00",
        exactTime: "Sep 25, 2026 · 2:05 PM",
        role: "Admin",
        actorId: "ADMIN-01",
        user: "ADMIN (Limuel)",
        action: "Accepted APP-1062 for Hello Solar Direct Installation",
        record: "APP-1062",
        recordType: "Application",
        details: { installerType: "Hello Solar Direct", assignedTeam: "Central Operations (Team Alpha)" }
      },
      {
        id: "ACT-804",
        timestamp: "2026-09-25T13:50:00+08:00",
        exactTime: "Sep 25, 2026 · 1:50 PM",
        role: "Customer",
        actorId: "CUS-1003",
        user: "CUS-1003 (Andrea Lim)",
        action: "Uploaded 2 updated salary slips for review",
        record: "APP-1031",
        recordType: "Application",
        details: { documentType: "Proof of Income", filesUploaded: 2 }
      },
      {
        id: "ACT-805",
        timestamp: "2026-09-25T12:50:00+08:00",
        exactTime: "Sep 25, 2026 · 12:50 PM",
        role: "Admin",
        actorId: "ADMIN-01",
        user: "ADMIN (Limuel)",
        action: "Updated payment status to On Time for APP-1050",
        record: "APP-1050",
        recordType: "Payment",
        details: { paymentStatus: "On Time", previousStatus: "Due Soon" }
      },
      {
        id: "ACT-806",
        timestamp: "2026-09-25T11:50:00+08:00",
        exactTime: "Sep 25, 2026 · 11:50 AM",
        role: "Installer",
        actorId: "INS-004",
        user: "INS-004 (GreenVolt)",
        action: "Flagged installation delay on JOB-304 due to utility permit",
        record: "JOB-304",
        recordType: "Installation",
        details: { delayCategory: "Permit Approval", reason: "Utility bi-directional meter calibration backlog" }
      },
      {
        id: "ACT-807",
        timestamp: "2026-09-25T10:50:00+08:00",
        exactTime: "Sep 25, 2026 · 10:50 AM",
        role: "Merchant",
        actorId: "MER-019",
        user: "MER-019 (SolarHub)",
        action: "Submitted bill of materials for APP-1050",
        record: "MER-019",
        recordType: "Merchant Account",
        details: { documentType: "Bill of Materials", lineItems: 14 }
      },
      {
        id: "ACT-808",
        timestamp: "2026-09-24T16:15:00+08:00",
        exactTime: "Sep 24, 2026 · 4:15 PM",
        role: "Financer",
        actorId: "FIN-002",
        user: "FIN-002 (BDO)",
        action: "Declined APP-1089 due to debt ratio requirements",
        record: "APP-1089",
        recordType: "Application",
        details: { decision: "Declined", reason: "Debt-to-income ratio exceeds regulatory threshold" }
      },
      {
        id: "ACT-809",
        timestamp: "2026-09-24T11:30:00+08:00",
        exactTime: "Sep 24, 2026 · 11:30 AM",
        role: "Customer",
        actorId: "CUS-1007",
        user: "CUS-1007 (Roberto Santos)",
        action: "Settled final monthly amortization for APP-1070",
        record: "APP-1070",
        recordType: "Payment",
        details: { amount: 3600, scheduleRef: "PAY-1070-FINAL", paymentStatus: "Completed" }
      },
      {
        id: "ACT-810",
        timestamp: "2026-09-23T09:45:00+08:00",
        exactTime: "Sep 23, 2026 · 9:45 AM",
        role: "Admin",
        actorId: "ADMIN-01",
        user: "ADMIN (Limuel)",
        action: "Deactivated inactive installer account INS-005",
        record: "INS-005",
        recordType: "Installer Account",
        details: { accountType: "Installer", previousStatus: "Active", newStatus: "Inactive" }
      },
      {
        id: "ACT-811",
        timestamp: "2026-09-25T10:15:00+08:00",
        exactTime: "Sep 25, 2026 · 10:15 AM",
        role: "Admin",
        actorId: "ADMIN-01",
        user: "ADMIN (Limuel)",
        action: "Assigned high-priority support ticket SUP-044 to ADMIN (Limuel)",
        record: "SUP-044",
        recordType: "Support Ticket",
        details: { priority: "High", assignedTo: "ADMIN (Limuel)", ticketId: "SUP-044" }
      },
      {
        id: "ACT-812",
        timestamp: "2026-09-24T14:40:00+08:00",
        exactTime: "Sep 24, 2026 · 2:40 PM",
        role: "Merchant",
        actorId: "MER-021",
        user: "MER-021 (SolarTech Supply Corp)",
        action: "Dispatched tier-1 inverter and photovoltaic hardware for JOB-302",
        record: "MER-021",
        recordType: "Merchant Account",
        details: { inventoryDispatched: "Growatt 5kW Hybrid Inverter", linkedJob: "JOB-302" }
      }
    ],

    settings: {
      companyName: "Hello Solar Philippines",
      timezone: "Philippine Standard Time (GMT+8)",
      currency: "PHP (₱)",
      contactEmail: "admin@hellosolar.ph",
      directInstallTeam: "Hello Solar Central Operations (Team Alpha)",
      maxDirectProjects: 12,
      directInstallConfirmation: true,
      overdueThresholdDays: 5,
      installationDelayThresholdDays: 1,
      docReviewEscalationHours: 48,
      autoNotifyInstallers: true
    }
  };

  function parseActivityDate(dateInput) {
    if (!dateInput) return null;
    if (dateInput instanceof Date) {
      return isNaN(dateInput.getTime()) ? null : dateInput;
    }
    if (typeof dateInput === "string") {
      // Strip middle dots or bullets if present: "Sep 25, 2026 · 2:38 PM"
      const cleaned = dateInput.replace(/[·•]/g, " ").replace(/\s+/g, " ").trim();
      const dCleaned = new Date(cleaned);
      if (!isNaN(dCleaned.getTime())) return dCleaned;

      const dDirect = new Date(dateInput);
      if (!isNaN(dDirect.getTime())) return dDirect;
    }
    return null;
  }

  function formatExactAuditTimestamp(dateInput) {
    if (!dateInput) return "";
    const d = parseActivityDate(dateInput);
    if (!d) return String(dateInput);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const m = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();

    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${m} ${day}, ${year} · ${hours}:${minutes} ${ampm}`;
  }

  function formatRelativeAuditTime(dateInput, fromDate) {
    if (!dateInput) return null;
    const targetDate = parseActivityDate(dateInput);
    if (!targetDate) return null;

    const now = (fromDate instanceof Date && !isNaN(fromDate.getTime())) ? fromDate : new Date();
    const diffMs = now.getTime() - targetDate.getTime();

    // Clock skew / sub-minute grace period (up to 5 seconds drift)
    if (diffMs < 0 && diffMs >= -5000) {
      return "Just now";
    }
    // Future timestamp cannot be reliably represented as a past relative label
    if (diffMs < -5000) {
      return null;
    }

    const diffSeconds = Math.max(0, Math.floor(diffMs / 1000));
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 45) {
      return "Just now";
    }
    if (diffMinutes === 1) {
      return "1 min ago";
    }
    if (diffMinutes < 60) {
      return `${diffMinutes} mins ago`;
    }
    if (diffHours === 1) {
      return "1 hour ago";
    }
    if (diffHours < 24) {
      return `${diffHours} hours ago`;
    }
    if (diffDays === 1) {
      return "Yesterday";
    }
    if (diffDays < 7) {
      return `${diffDays} days ago`;
    }
    if (diffDays < 14) {
      return "1 week ago";
    }
    if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} weeks ago`;
    }
    if (diffDays < 60) {
      return "1 month ago";
    }
    if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} months ago`;
    }
    return "Over a year ago";
  }

  class HelloSolarStore {
    constructor() {
      this.data = this.load();
    }

    load() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          // Simple integrity check
          if (parsed && Array.isArray(parsed.applications) && Array.isArray(parsed.customers)) {
            // Data integrity reconciliation
            const app1089 = parsed.applications.find(a => a.id === "APP-1089");
            if (app1089 && (app1089.nextDue === "N/A" || !app1089.nextDue)) {
              app1089.nextDue = "2026-09-08";
            }
            const app1031 = parsed.applications.find(a => a.id === "APP-1031");
            if (app1031 && app1031.nextDue === "2026-10-02") {
              app1031.nextDue = "2026-09-30";
            }
            if (!parsed.paymentSchedules) {
              parsed.paymentSchedules = {};
            }

            // Ensure activity log entries have exact timestamps and metadata
            if (Array.isArray(parsed.activity)) {
              // If stored activity is missing our new entries (SUP-044, MER-021), add them
              const hasSup044 = parsed.activity.some(a => a.record === "SUP-044");
              if (!hasSup044) {
                parsed.activity.push(
                  {
                    id: "ACT-811",
                    timestamp: "2026-09-25T10:15:00+08:00",
                    exactTime: "Sep 25, 2026 · 10:15 AM",
                    role: "Admin",
                    actorId: "ADMIN-01",
                    user: "ADMIN (Limuel)",
                    action: "Assigned high-priority support ticket SUP-044 to ADMIN (Limuel)",
                    record: "SUP-044",
                    recordType: "Support Ticket",
                    details: { priority: "High", assignedTo: "ADMIN (Limuel)", ticketId: "SUP-044" }
                  },
                  {
                    id: "ACT-812",
                    timestamp: "2026-09-24T14:40:00+08:00",
                    exactTime: "Sep 24, 2026 · 2:40 PM",
                    role: "Merchant",
                    actorId: "MER-021",
                    user: "MER-021 (SolarTech Supply Corp)",
                    action: "Dispatched tier-1 inverter and photovoltaic hardware for JOB-302",
                    record: "MER-021",
                    recordType: "Merchant Account",
                    details: { inventoryDispatched: "Growatt 5kW Hybrid Inverter", linkedJob: "JOB-302" }
                  }
                );
              }

              parsed.activity.forEach((a, idx) => {
                // Delete any stale hardcoded relative times so timestamp remains single source of truth
                delete a.time;

                if (!a.timestamp) {
                  const seedMatch = DEFAULT_DATA.activity.find(s => s.id === a.id);
                  if (seedMatch && seedMatch.timestamp) {
                    a.timestamp = seedMatch.timestamp;
                    a.exactTime = seedMatch.exactTime;
                    a.details = seedMatch.details;
                  } else {
                    const d = new Date();
                    d.setHours(d.getHours() - idx);
                    a.timestamp = d.toISOString();
                    a.exactTime = formatExactAuditTimestamp(d);
                  }
                }
                if (!a.exactTime) {
                  a.exactTime = formatExactAuditTimestamp(a.timestamp);
                }
                if (!a.recordType && a.record) {
                  if (a.record.startsWith("APP-")) a.recordType = "Application";
                  else if (a.record.startsWith("JOB-")) a.recordType = "Installation";
                  else if (a.record.startsWith("SUP-") || a.record.startsWith("TIC-")) a.recordType = "Support Ticket";
                  else if (a.record.startsWith("PAY-")) a.recordType = "Payment";
                  else if (a.record.startsWith("CUS-")) a.recordType = "Customer Account";
                  else if (a.record.startsWith("FIN-")) a.recordType = "Financer Account";
                  else if (a.record.startsWith("INS-")) a.recordType = "Installer Account";
                  else if (a.record.startsWith("MER-")) a.recordType = "Merchant Account";
                  else if (a.record === "SETTINGS") a.recordType = "System Settings";
                  else a.recordType = "Record";
                }
                if (!a.actorId) {
                  const idMatch = (a.user || "").match(/([A-Z]{3}-\d+|ADMIN(-\d+)?)/i);
                  a.actorId = idMatch ? idMatch[0] : (a.role === "Admin" ? "ADMIN-01" : a.role);
                }
                if (!a.details) {
                  a.details = {};
                }
              });
            } else {
              parsed.activity = JSON.parse(JSON.stringify(DEFAULT_DATA.activity));
            }

            return parsed;
          }
        }
      } catch (err) {
        console.warn("Could not load from localStorage, using seed data:", err);
      }
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }

    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      } catch (err) {
        console.warn("Could not save to localStorage:", err);
      }
    }

    reset() {
      this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
      this.save();
    }

    // --- ACTIVITY LOG HELPER ---
    logActivity(role, user, action, record, options = {}) {
      const now = new Date();

      let actorId = options.actorId;
      if (!actorId) {
        const idMatch = (user || "").match(/([A-Z]{3}-\d+|ADMIN(-\d+)?)/i);
        actorId = idMatch ? idMatch[0] : (role === "Admin" ? "ADMIN-01" : role);
      }

      let recordType = options.recordType;
      if (!recordType && record) {
        if (record.startsWith("APP-")) recordType = "Application";
        else if (record.startsWith("JOB-")) recordType = "Installation";
        else if (record.startsWith("SUP-") || record.startsWith("TIC-")) recordType = "Support Ticket";
        else if (record.startsWith("PAY-")) recordType = "Payment";
        else if (record.startsWith("CUS-")) recordType = "Customer Account";
        else if (record.startsWith("FIN-")) recordType = "Financer Account";
        else if (record.startsWith("INS-")) recordType = "Installer Account";
        else if (record.startsWith("MER-")) recordType = "Merchant Account";
        else if (record === "SETTINGS") recordType = "System Settings";
        else recordType = "Record";
      }

      const isoTimestamp = options.timestamp || now.toISOString();
      const exactTime = options.exactTime || formatExactAuditTimestamp(now);

      const nextNum = Math.floor(813 + Math.random() * 900);
      const entry = {
        id: options.id || `ACT-${nextNum}`,
        timestamp: isoTimestamp,
        exactTime: exactTime,
        actorId: actorId,
        role: role,
        user: user,
        action: action,
        record: record,
        recordType: recordType || "Record",
        details: options.details || {}
      };
      this.data.activity.unshift(entry);
      this.save();
      return entry;
    }

    // --- HELLO SOLAR DIRECT INSTALLATION WORKFLOW ---
    acceptDirectInstallation(appId) {
      const app = this.data.applications.find(a => a.id === appId);
      if (!app) return { success: false, message: "Application not found" };

      // Enforce configured Maximum Concurrent Direct Projects limit
      const limit = Number(this.data.settings?.maxDirectProjects) || 12;
      const designatedTeam = this.data.settings?.directInstallTeam || "Hello Solar Central Operations (Team Alpha)";

      // Count currently active Direct projects
      const activeDirectCount = this.data.installations.filter(j => 
        (j.installerType === "Hello Solar Direct" || j.installer === designatedTeam || j.installer === "Hello Solar Internal Team") &&
        !["Completed", "Cancelled"].includes(j.status)
      ).length;

      if (activeDirectCount >= limit) {
        return {
          success: false,
          capacityReached: true,
          currentActive: activeDirectCount,
          limit: limit,
          message: `Direct installation capacity reached (${activeDirectCount}/${limit} active projects). Complete existing direct projects before accepting more.`
        };
      }

      // Update Application
      app.installerType = "Hello Solar Direct";
      app.installer = designatedTeam;
      app.stage = "Ready for Installation";
      app.updated = "Just now";
      app.notes = (app.notes ? app.notes + " • " : "") + `Accepted for Hello Solar Direct Installation by Super Admin (${designatedTeam}).`;

      // Ensure corresponding installation exists or update it
      let install = this.data.installations.find(j => j.appId === appId);
      if (install) {
        install.installer = designatedTeam;
        install.installerType = "Hello Solar Direct";
        install.leadTech = "Unassigned";
        install.status = "Ready";
        install.schedule = "Pending Schedule";
        install.notes = `Reassigned to ${designatedTeam} for Direct Installation.`;
      } else {
        const nextJobNum = 308 + this.data.installations.length;
        install = {
          id: `JOB-${nextJobNum}`,
          appId: app.id,
          customer: app.customer,
          location: app.location,
          system: app.system,
          installer: designatedTeam,
          installerType: "Hello Solar Direct",
          status: "Ready",
          schedule: "Pending Schedule",
          leadTech: "Unassigned",
          notes: `Scheduled via Hello Solar Direct acceptance. Designated unit: ${designatedTeam}.`
        };
        this.data.installations.unshift(install);
      }

      // Synchronize all installer activeJobs counts
      this.data.installers.forEach(inst => {
        inst.activeJobs = this.data.installations.filter(j => 
          (j.installer === inst.name || (inst.id === "INS-001" && (j.installerType === "Hello Solar Direct" || j.installer === designatedTeam))) &&
          !["Completed", "Cancelled"].includes(j.status)
        ).length;
      });

      // Log in audit log
      this.logActivity("Admin", "ADMIN (Limuel)", `ADMIN accepted ${appId} for Hello Solar Direct Installation`, appId, {
        actorId: "ADMIN-01",
        recordType: "Application",
        details: { installer: designatedTeam, installerType: "Hello Solar Direct", targetJob: install.id, activeCapacity: `${activeDirectCount + 1}/${limit}` }
      });

      this.save();
      return { success: true, app, install };
    }

    // --- APPLICATION WORKFLOWS ---
    updateApplicationStage(appId, newStage, options = {}) {
      const app = this.data.applications.find(a => a.id === appId);
      if (!app) return false;
      const prevStage = app.stage;
      app.stage = newStage;
      app.updated = "Just now";

      let actorRole = options.role || "Admin";
      let actorUser = options.user || "ADMIN (Limuel)";
      let actorId = options.actorId || "ADMIN-01";
      let actionText = `ADMIN updated stage for ${appId} from "${prevStage}" to "${newStage}"`;

      if (newStage === "Approved") {
        actorRole = "Financer";
        actorUser = app.financer || "FIN-001 (SunFund)";
        actorId = app.financerId || (app.financer.includes("SunFund") ? "FIN-001" : "FIN-002");
        actionText = `Financing credit check approved for ${appId} (${app.customer}) · ₱${app.amount?.toLocaleString() || app.amount}`;
      } else if (newStage === "Declined") {
        actorRole = "Financer";
        actorUser = app.financer || "FIN-002 (BDO)";
        actorId = app.financerId || "FIN-002";
        actionText = `Financing declined for ${appId} (${app.customer}) · Stage set to Declined`;
      }

      this.logActivity(actorRole, actorUser, actionText, appId, {
        actorId,
        recordType: "Application",
        details: { prevStage, newStage, customer: app.customer, ...options.details }
      });
      this.save();
      return true;
    }

    // --- PARTNER INSTALLER ASSIGNMENT WORKFLOW ---
    assignPartnerInstaller(appId, installerName, schedule = "Within 5 business days") {
      const app = this.data.applications.find(a => a.id === appId);
      if (!app) return { success: false, message: "Application not found" };

      app.installer = installerName;
      app.installerType = "Partner Installer";
      app.stage = "Ready for Installation";
      app.updated = "Just now";
      app.notes = (app.notes ? app.notes + " • " : "") + `Assigned to partner installer ${installerName}.`;

      let install = this.data.installations.find(j => j.appId === appId);
      if (install) {
        install.installer = installerName;
        install.installerType = "Partner Installer";
        install.leadTech = "Partner Lead Technician";
        install.schedule = schedule;
        if (install.status === "Delayed" || install.status === "Scheduled") {
          install.status = "Scheduled";
        }
        install.notes = `Assigned to ${installerName}.`;
      } else {
        const nextJobNum = 308 + this.data.installations.length;
        install = {
          id: `JOB-${nextJobNum}`,
          appId: app.id,
          customer: app.customer,
          location: app.location,
          system: app.system,
          installer: installerName,
          installerType: "Partner Installer",
          status: "Scheduled",
          schedule: schedule,
          leadTech: "Partner Lead Technician",
          notes: `Assigned to partner installer ${installerName} by Super Admin.`
        };
        this.data.installations.unshift(install);
      }

      // Synchronize all installer activeJobs counts
      this.data.installers.forEach(inst => {
        inst.activeJobs = this.data.installations.filter(j => 
          (j.installer === inst.name || (inst.id === "INS-001" && j.installerType === "Hello Solar Direct")) &&
          !["Completed", "Cancelled"].includes(j.status)
        ).length;
      });

      this.logActivity("Admin", "ADMIN (Limuel)", `ADMIN assigned partner installer "${installerName}" to ${appId}`, appId, {
        actorId: "ADMIN-01",
        recordType: "Application",
        details: { installer: installerName, installerType: "Partner Installer", schedule }
      });
      this.save();
      return { success: true, app, install };
    }

    // --- APPLICATION DOCUMENT HELPERS ---
    getAppDocuments(appId) {
      const app = this.data.applications.find(a => a.id === appId);
      if (!app) return [];
      if (app.documents && Array.isArray(app.documents)) return app.documents;

      const baseName = app.customer.toLowerCase().replace(/[^a-z0-9]/g, "_");
      const isApproved = app.stage === "Approved" || app.stage === "Ready for Installation" || app.stage === "Completed";
      const isReview = app.stage === "Under Review";
      const isMissing = app.stage === "Missing Documents";
      const isSubmitted = app.stage === "Submitted";
      const isDeclined = app.stage === "Declined";

      return [
        {
          name: "Government-Issued Photo ID",
          status: "Verified",
          date: "2026-09-18",
          file: `${baseName}_gov_id.pdf`
        },
        {
          name: "Latest 3-Month Electric Utility Statement",
          status: isMissing ? "Missing" : (isSubmitted ? "Submitted" : (isDeclined ? "Verified" : "Verified")),
          date: isMissing ? null : "2026-09-18",
          file: isMissing ? null : `${baseName}_utility_statement.pdf`
        },
        {
          name: "Proof of Income / Certificate of Employment",
          status: isMissing ? "Missing" : (isDeclined ? "Rejected" : (isSubmitted ? "Submitted" : "Verified")),
          date: isMissing ? null : "2026-09-19",
          file: isMissing ? null : `${baseName}_proof_of_income.pdf`
        },
        {
          name: "Roof & Property Ownership Authorization",
          status: isDeclined ? "Missing" : (isSubmitted ? "Submitted" : "Verified"),
          date: isDeclined ? null : "2026-09-19",
          file: isDeclined ? null : `${baseName}_property_authorization.pdf`
        },
        {
          name: "Pre-Installation Solar Site Assessment",
          status: isSubmitted || isDeclined ? "Missing" : (isReview ? "Submitted" : "Verified"),
          date: isSubmitted || isDeclined ? null : "2026-09-20",
          file: isSubmitted || isDeclined ? null : `${baseName}_site_assessment.pdf`
        }
      ];
    }

    updateDocumentStatus(appId, docName, newStatus) {
      const app = this.data.applications.find(a => a.id === appId);
      if (!app) return false;
      if (!app.documents) {
        app.documents = this.getAppDocuments(appId);
      }
      const doc = app.documents.find(d => d.name === docName);
      if (doc) {
        const prevStatus = doc.status;
        doc.status = newStatus;
        if (newStatus === "Verified" || newStatus === "Submitted") {
          doc.date = new Date().toISOString().slice(0, 10);
        }
        const activeCount = app.documents.filter(d => d.status === "Verified" || d.status === "Submitted").length;
        app.docs = `${activeCount}/5`;
        this.logActivity("Admin", "ADMIN (Limuel)", `ADMIN updated document "${docName}" to ${newStatus} for ${appId}`, appId, {
          actorId: "ADMIN-01",
          recordType: "Application",
          details: { docName, prevStatus, newStatus, verifiedDocs: app.docs }
        });
        this.save();
        return true;
      }
      return false;
    }

    // --- APPLICATION SPECIFIC ACTIVITY TIMELINE ---
    getAppActivity(appId) {
      const app = this.data.applications.find(a => a.id === appId);
      if (!app) return [];

      const install = this.data.installations.find(j => j.appId === appId);
      const rawActivity = this.data.activity.filter(a => 
        a.record === appId || 
        (install && a.record === install.id) ||
        (a.action && a.action.includes(appId))
      );

      const list = [...rawActivity];
      if (list.length < 2) {
        list.push({
          id: `ACT-HIST-1`,
          time: app.updated || "Recent",
          role: "Financer",
          user: `${app.financer}`,
          action: `Financing status logged as: ${app.stage}`,
          record: appId
        });
        list.push({
          id: `ACT-HIST-2`,
          time: "Initial Intake",
          role: "Customer",
          user: `${app.customer} (${app.customerId})`,
          action: `Application submitted for ${app.system} solar system at ${app.location}`,
          record: appId
        });
      }

      return list;
    }

    // --- INSTALLATION WORKFLOWS ---
    getSchedulableProjects() {
      // Must only show existing projects with Status = Ready and Schedule = Pending Schedule
      return this.data.installations.filter(job => 
        job.status === "Ready" && job.schedule === "Pending Schedule"
      ).map(job => ({
        id: job.id,
        appId: job.appId || job.id,
        customer: job.customer,
        location: job.location,
        system: job.system,
        installerType: job.installerType || "Hello Solar Direct",
        installer: job.installerType === "Hello Solar Direct" ? "Hello Solar Internal Team" : (job.installer || "Partner Installer"),
        leadTech: (!job.leadTech || job.leadTech === "Hello Solar Internal Team" || job.leadTech === "Unassigned") ? "Unassigned" : job.leadTech,
        currentStatus: job.status,
        schedule: job.schedule,
        notes: job.notes
      }));
    }

    scheduleReadyProject(jobId, scheduleDate, scheduleTime, teamLead, notes) {
      // Must not create a new installation record. Strictly update existing project.
      const job = this.data.installations.find(j => j.id === jobId || j.appId === jobId);
      if (!job) return { success: false, message: "Existing installation record not found." };

      let formattedDate = scheduleDate;
      if (scheduleDate) {
        try {
          const parts = scheduleDate.split("-");
          if (parts.length === 3) {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const m = months[parseInt(parts[1], 10) - 1] || parts[1];
            formattedDate = `${m} ${parseInt(parts[2], 10)}, ${parts[0]}`;
          }
        } catch (e) {
          formattedDate = scheduleDate;
        }
      }
      const formattedSchedule = `${formattedDate} at ${scheduleTime || "09:00 AM"}`;

      job.status = "Scheduled";
      job.schedule = formattedSchedule;

      // Assign actual team lead (never "Hello Solar Internal Team" as team lead)
      const assignedLead = (teamLead && teamLead.trim() && teamLead !== "Hello Solar Internal Team" && teamLead !== "Unassigned") 
        ? teamLead.trim() 
        : "Unassigned";
      job.leadTech = assignedLead;

      // Ensure installer remains Hello Solar Internal Team for Direct projects
      if (job.installerType === "Hello Solar Direct") {
        job.installer = "Hello Solar Internal Team";
      }

      if (notes) job.notes = (job.notes ? job.notes + " • " : "") + notes;
      else job.notes = `Scheduled for ${formattedSchedule}. Assigned Lead: ${assignedLead}.`;

      // Update linked application if exists
      const targetApp = this.data.applications.find(a => a.id === job.appId);
      if (targetApp) {
        targetApp.stage = "Ready for Installation";
        targetApp.updated = "Just now";
        targetApp.notes = (targetApp.notes ? targetApp.notes + " • " : "") + `Installation scheduled for ${formattedSchedule}. Lead: ${assignedLead}.`;
      }

      // Synchronize installer activeJobs counts
      this.data.installers.forEach(inst => {
        inst.activeJobs = this.data.installations.filter(j => 
          (j.installer === inst.name || (inst.id === "INS-001" && j.installerType === "Hello Solar Direct")) &&
          !["Completed", "Cancelled"].includes(j.status)
        ).length;
      });

      this.logActivity(
        "Admin",
        "ADMIN (Limuel)",
        `ADMIN scheduled installation for ${job.id} (${job.customer}) on ${formattedSchedule}. Lead: ${assignedLead}`,
        job.id,
        {
          actorId: "ADMIN-01",
          recordType: "Installation",
          details: { schedule: formattedSchedule, leadTech: assignedLead, status: "Scheduled", jobCustomer: job.customer }
        }
      );
      this.save();
      return { success: true, job, app: targetApp };
    }

    updateInstallationStatus(jobId, newStatus, newSchedule, notes, delayReason, teamLead) {
      const job = this.data.installations.find(j => j.id === jobId);
      if (!job) return false;
      const prevStatus = job.status;
      job.status = newStatus;
      if (newSchedule) job.schedule = newSchedule.replace(/\s*\(Delayed\)/gi, "").trim();
      if (notes) job.notes = notes;
      if (teamLead && teamLead !== "Hello Solar Internal Team") {
        job.leadTech = teamLead;
      }
      if (delayReason) {
        job.delayReason = delayReason;
        job.notes = (notes ? notes + " • " : "") + `Delayed: ${delayReason}`;
      } else if (newStatus !== "Delayed") {
        delete job.delayReason;
      }
      
      // Update linked application and completedDate if completed
      if (newStatus === "Completed") {
        if (!job.completedDate) {
          const now = new Date();
          const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          job.completedDate = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
        }
        const app = this.data.applications.find(a => a.id === job.appId);
        if (app) {
          app.stage = "Approved";
          app.updated = "Just now";
        }
      }

      // Synchronize all installer activeJobs counts
      this.data.installers.forEach(inst => {
        inst.activeJobs = this.data.installations.filter(j => 
          (j.installer === inst.name || (inst.id === "INS-001" && j.installerType === "Hello Solar Direct")) &&
          !["Completed", "Cancelled"].includes(j.status)
        ).length;
      });

      this.logActivity(
        "Admin",
        "ADMIN (Limuel)",
        `ADMIN updated installation ${jobId} status from "${prevStatus}" to "${newStatus}"`,
        jobId,
        {
          actorId: "ADMIN-01",
          recordType: "Installation",
          details: { prevStatus, newStatus, schedule: newSchedule, delayReason, leadTech: teamLead }
        }
      );
      this.save();
      return true;
    }

    // --- INSTALLATION SPECIFIC ACTIVITY TIMELINE ---
    getJobActivity(jobId) {
      const job = this.data.installations.find(j => j.id === jobId);
      if (!job) return [];
      const appId = job.appId;

      const rawActivity = this.data.activity.filter(a =>
        a.record === jobId ||
        (appId && a.record === appId && (
          a.action.toLowerCase().includes("install") ||
          a.action.toLowerCase().includes("schedule") ||
          a.action.toLowerCase().includes("direct") ||
          a.action.toLowerCase().includes("tech") ||
          a.action.toLowerCase().includes("lead")
        )) ||
        (a.action && (a.action.includes(jobId) || (appId && a.action.includes(appId))))
      );

      const list = [...rawActivity];
      if (list.length < 2) {
        list.push({
          id: `ACT-JOB-INIT-1`,
          time: job.schedule ? "Schedule Logged" : "Recent",
          role: "Installer",
          user: job.installer,
          action: `Assigned installer: ${job.installer} (${job.installerType}). Current status: ${job.status}`,
          record: jobId
        });
        if (appId) {
          list.push({
            id: `ACT-JOB-INIT-2`,
            time: "Project Intake",
            role: "Admin",
            user: "ADMIN (Limuel)",
            action: `Project originated from verified application ${appId} (${job.system}, ${job.location})`,
            record: jobId
          });
        }
      }

      return list;
    }

    // --- PAYMENT WORKFLOWS ---
    getPaymentSchedule(appId) {
      if (!this.data.paymentSchedules) {
        this.data.paymentSchedules = {};
      }

      if (this.data.paymentSchedules[appId]) {
        return this.data.paymentSchedules[appId];
      }

      const app = this.data.applications.find(a => a.id === appId);
      if (!app) return null;

      const monthly = app.monthly || 5000;
      const totalAmount = app.amount || 300000;
      const totalInstallments = Math.max(12, Math.round(totalAmount / monthly));
      
      const installments = [];
      const history = [];

      if (app.id === "APP-1070" || app.paymentStatus === "Completed") {
        // Fully paid obligation
        for (let i = 1; i <= totalInstallments; i++) {
          const installmentDate = new Date("2023-09-15T00:00:00");
          installmentDate.setMonth(installmentDate.getMonth() + i - 1);
          const dateStr = installmentDate.toISOString().split("T")[0];
          installments.push({
            no: i,
            dueDate: dateStr,
            amount: monthly,
            status: "Paid",
            paidDate: i === totalInstallments ? "2026-09-23" : dateStr,
            paidAmount: monthly,
            reference: `SF-REC-1070-${String(i).padStart(2, '0')}`,
            notes: i === totalInstallments ? "Final payment settled in full. Obligation completed." : "Regular monthly amortization cleared."
          });
        }
        history.push({
          id: "PAY-1070-FINAL",
          appId: "APP-1070",
          date: "2026-09-23",
          amount: monthly,
          method: "Bank Transfer",
          ref: "SF-REC-1070-FINAL",
          status: "Verified",
          recordedBy: "ADMIN (Limuel)",
          notes: "Final amort. payment settled in full. Account marked Completed."
        });
        history.push({
          id: "PAY-1070-35",
          appId: "APP-1070",
          date: "2026-08-15",
          amount: monthly,
          method: "Auto-Debit",
          ref: "SF-REC-1070-35",
          status: "Verified",
          recordedBy: "System Mesh",
          notes: "Scheduled auto-debit cleared."
        });
        history.push({
          id: "PAY-1070-34",
          appId: "APP-1070",
          date: "2026-07-15",
          amount: monthly,
          method: "Auto-Debit",
          ref: "SF-REC-1070-34",
          status: "Verified",
          recordedBy: "System Mesh",
          notes: "Scheduled auto-debit cleared."
        });
      } else if (app.id === "APP-1056" || (app.paymentStatus === "Overdue" && app.id !== "APP-1089")) {
        // Overdue account APP-1056 where Sep 12, 2026 was missed
        const missedDate = app.nextDue || "2026-09-12";
        const paidDates = ["2026-06-12", "2026-07-12", "2026-08-12"];
        paidDates.forEach((pDate, idx) => {
          installments.push({
            no: idx + 1,
            dueDate: pDate,
            amount: monthly,
            status: "Paid",
            paidDate: pDate,
            paidAmount: monthly,
            reference: `BDO-REC-1056-0${idx + 1}`,
            notes: "Direct debit payment verified."
          });
          history.unshift({
            id: `PAY-1056-0${idx + 1}`,
            appId: "APP-1056",
            date: pDate,
            amount: monthly,
            method: "Auto-Debit",
            ref: `BDO-REC-1056-0${idx + 1}`,
            status: "Verified",
            recordedBy: "System Mesh",
            notes: "Automatic amortization deduction."
          });
        });

        // Missed installment #4
        installments.push({
          no: 4,
          dueDate: missedDate,
          amount: monthly,
          status: "Overdue",
          paidDate: null,
          paidAmount: 0,
          reference: null,
          notes: "Scheduled payment date passed without required payment (12 days overdue)."
        });

        for (let i = 5; i <= totalInstallments; i++) {
          const upDate = new Date("2026-09-12T00:00:00");
          upDate.setMonth(upDate.getMonth() + (i - 4));
          installments.push({
            no: i,
            dueDate: upDate.toISOString().split("T")[0],
            amount: monthly,
            status: "Upcoming",
            paidDate: null,
            paidAmount: 0,
            reference: null,
            notes: ""
          });
        }
      } else if (app.id === "APP-1089") {
        // Overdue account APP-1089 (due Sep 08, 2026)
        const missedDate = "2026-09-08";
        installments.push({
          no: 1,
          dueDate: missedDate,
          amount: monthly,
          status: "Overdue",
          paidDate: null,
          paidAmount: 0,
          reference: null,
          notes: "Financer record flagged missed initial payment (16 days overdue)."
        });
        for (let i = 2; i <= totalInstallments; i++) {
          const upDate = new Date("2026-09-08T00:00:00");
          upDate.setMonth(upDate.getMonth() + (i - 1));
          installments.push({
            no: i,
            dueDate: upDate.toISOString().split("T")[0],
            amount: monthly,
            status: "Upcoming",
            paidDate: null,
            paidAmount: 0,
            reference: null,
            notes: ""
          });
        }
      } else {
        // Standard active account (On Time or Due Soon)
        const nextDueStr = app.nextDue || "2026-10-15";
        const isDueSoon = app.paymentStatus === "Due Soon";

        const hasHistory = ["APP-1024", "APP-1048", "APP-1050", "APP-1062", "APP-1102"].includes(app.id);
        const pastCount = hasHistory ? (app.id === "APP-1024" ? 4 : 2) : 0;

        for (let i = 1; i <= pastCount; i++) {
          const pDate = new Date(nextDueStr + "T00:00:00");
          pDate.setMonth(pDate.getMonth() - (pastCount - i + 1));
          const pDateStr = pDate.toISOString().split("T")[0];
          const ref = `REC-${app.id.replace('APP-', '')}-0${i}`;
          installments.push({
            no: i,
            dueDate: pDateStr,
            amount: monthly,
            status: "Paid",
            paidDate: pDateStr,
            paidAmount: monthly,
            reference: ref,
            notes: "Automatic installment debit cleared."
          });
          history.unshift({
            id: `PAY-${app.id}-${i}`,
            appId: app.id,
            date: pDateStr,
            amount: monthly,
            method: "Auto-Debit",
            ref: ref,
            status: "Verified",
            recordedBy: "System Mesh",
            notes: "Verified bank transfer received on schedule."
          });
        }

        // Current active installment
        installments.push({
          no: pastCount + 1,
          dueDate: nextDueStr,
          amount: monthly,
          status: isDueSoon ? "Due Soon" : "On Time",
          paidDate: null,
          paidAmount: 0,
          reference: null,
          notes: isDueSoon ? "Payment due within the next 7 days." : "Upcoming regular monthly installment."
        });

        // Remaining upcoming installments
        for (let i = pastCount + 2; i <= totalInstallments; i++) {
          const upDate = new Date(nextDueStr + "T00:00:00");
          upDate.setMonth(upDate.getMonth() + (i - pastCount - 1));
          installments.push({
            no: i,
            dueDate: upDate.toISOString().split("T")[0],
            amount: monthly,
            status: "Upcoming",
            paidDate: null,
            paidAmount: 0,
            reference: null,
            notes: ""
          });
        }
      }

      const scheduleData = {
        appId: app.id,
        termMonths: totalInstallments,
        installments,
        history
      };

      this.data.paymentSchedules[appId] = scheduleData;
      return scheduleData;
    }

    calculatePaymentStatus(app) {
      const schedule = this.getPaymentSchedule(app.id);
      if (!schedule || !schedule.installments || !schedule.installments.length) {
        return {
          status: app.paymentStatus || "On Time",
          nextDue: app.nextDue || "Paid in Full",
          overdueCount: 0,
          remainingBalance: app.amount || 0,
          totalPaid: 0,
          progressCount: 0,
          totalInstallments: 0
        };
      }

      const installments = schedule.installments;
      const paidList = installments.filter(i => i.status === "Paid");
      const totalPaid = paidList.reduce((sum, i) => sum + (i.paidAmount || i.amount || 0), 0);
      const remainingBalance = Math.max(0, (app.amount || 0) - totalPaid);

      const unpaid = installments.filter(i => i.status !== "Paid");
      if (unpaid.length === 0 || remainingBalance <= 0) {
        return {
          status: "Completed",
          nextDue: "Paid in Full",
          overdueCount: 0,
          remainingBalance: 0,
          totalPaid,
          progressCount: installments.length,
          totalInstallments: installments.length
        };
      }

      // Sort unpaid installments chronologically
      unpaid.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

      // Reference system date: Sep 25, 2026
      const refDate = new Date("2026-09-25T00:00:00");

      // Check for overdue installment: scheduled payment date has passed by configured overdueThresholdDays
      const overdueGraceDays = Number(this.data.settings?.overdueThresholdDays) || 5;
      const overdueInstallment = unpaid.find(i => {
        const d = new Date(i.dueDate + "T00:00:00");
        const daysPastDue = Math.floor((refDate - d) / (1000 * 60 * 60 * 24));
        return daysPastDue >= overdueGraceDays;
      });

      const nextInstallment = unpaid[0];
      const nextDueDate = nextInstallment.dueDate;
      const nextDateObj = new Date(nextDueDate + "T00:00:00");
      const daysDiff = Math.round((nextDateObj - refDate) / (1000 * 60 * 60 * 24));

      let status = "On Time";
      let displayDueDate = nextDueDate;

      if (overdueInstallment) {
        status = "Overdue";
        displayDueDate = overdueInstallment.dueDate; // retain actual missed due date, never N/A!
      } else if (daysDiff >= 0 && daysDiff <= 7) {
        status = "Due Soon";
        displayDueDate = nextDueDate;
      } else {
        status = "On Time";
        displayDueDate = nextDueDate;
      }

      return {
        status,
        nextDue: displayDueDate,
        overdueCount: overdueInstallment ? 1 : 0,
        remainingBalance,
        totalPaid,
        progressCount: paidList.length,
        totalInstallments: installments.length
      };
    }

    recordPayment(appId, options = {}) {
      const app = this.data.applications.find(a => a.id === appId);
      if (!app) return false;

      const schedule = this.getPaymentSchedule(appId);
      if (!schedule) return false;

      const paymentDate = options.date || "2026-09-24";
      const reference = options.reference || `HS-REC-${appId.replace('APP-', '')}-${Date.now().toString().slice(-4)}`;
      const method = options.method || "Bank Transfer";
      const adminUser = options.adminUser || "ADMIN (Limuel)";
      const notes = options.notes || "";

      // Find target unpaid installment
      const unpaid = schedule.installments.filter(i => i.status !== "Paid");
      if (!unpaid.length) return false;

      // Oldest unpaid installment
      unpaid.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      const targetInstallment = unpaid[0];

      const amountPaid = Number(options.amount) || targetInstallment.amount || app.monthly;

      // Update installment in schedule
      targetInstallment.status = "Paid";
      targetInstallment.paidDate = paymentDate;
      targetInstallment.paidAmount = amountPaid;
      targetInstallment.reference = reference;
      if (notes) targetInstallment.notes = notes;

      // Append to payment history (never overwrite existing history!)
      schedule.history.unshift({
        id: `REC-${Date.now().toString().slice(-6)}`,
        appId: appId,
        date: paymentDate,
        amount: amountPaid,
        method: method,
        ref: reference,
        status: "Verified",
        recordedBy: adminUser,
        installmentNo: targetInstallment.no,
        notes: notes || `Recorded by Super Admin for Installment #${targetInstallment.no}`
      });

      // If user indicated payInFull or remaining unpaid is 0
      if (options.payInFull) {
        schedule.installments.forEach(i => {
          if (i.status !== "Paid") {
            i.status = "Paid";
            i.paidDate = paymentDate;
            i.paidAmount = i.amount;
            i.reference = reference + "-FINAL";
          }
        });
      }

      // Dynamically calculate status from updated schedule
      const statusInfo = this.calculatePaymentStatus(app);
      app.paymentStatus = statusInfo.status;
      app.nextDue = statusInfo.nextDue;
      app.updated = "Just now";

      // Synchronize Financer record if applicable
      if (app.financerId) {
        const financer = this.data.financers.find(f => f.id === app.financerId);
        if (financer) {
          const linkedApps = this.data.applications.filter(a => a.financerId === financer.id);
          financer.activeLoans = linkedApps.filter(a => a.stage !== "Declined" && a.paymentStatus !== "Completed").length;
        }
      }

      // Audit Trail Logging
      this.logActivity(
        "Admin",
        adminUser,
        `ADMIN recorded payment of ₱${amountPaid.toLocaleString()} for ${appId} (${app.customer}) · Ref: ${reference}. Repayment status updated to ${app.paymentStatus}`,
        appId,
        {
          actorId: "ADMIN-01",
          recordType: "Payment",
          details: { amount: amountPaid, reference, method, paymentStatus: app.paymentStatus, customer: app.customer }
        }
      );

      this.save();
      return { success: true, app, statusInfo };
    }

    recordPaymentAdjustment(appId, options = {}) {
      const app = this.data.applications.find(a => a.id === appId);
      if (!app) return false;

      const schedule = this.getPaymentSchedule(appId);
      const adminUser = options.adminUser || "ADMIN (Limuel)";
      const adjType = options.type || "Payment Note";
      const notes = options.notes || "";

      if (schedule) {
        schedule.history.unshift({
          id: `ADJ-${Date.now().toString().slice(-6)}`,
          appId: appId,
          date: options.date || "2026-09-24",
          amount: 0,
          method: "Administrative Adjustment",
          ref: `ADJ-${appId.replace('APP-', '')}-${Date.now().toString().slice(-3)}`,
          status: "Logged Note",
          recordedBy: adminUser,
          notes: `[${adjType}] ${notes}`
        });
      }

      this.logActivity(
        "Admin",
        adminUser,
        `ADMIN logged payment adjustment note (${adjType}) for ${appId} (${app.customer}): ${notes}`,
        appId,
        {
          actorId: "ADMIN-01",
          recordType: "Payment",
          details: { adjType, notes, date: options.date || "2026-09-24", customer: app.customer }
        }
      );

      this.save();
      return true;
    }

    getPaymentActivity(appId) {
      return this.data.activity.filter(a => 
        a.record === appId || 
        (a.action && a.action.toLowerCase().includes("payment") && a.action.includes(appId)) ||
        (a.action && a.action.toLowerCase().includes("amortization") && a.action.includes(appId))
      );
    }

    formatReadableDate(dateStr) {
      if (!dateStr || dateStr === "N/A" || dateStr === "—") return "—";
      if (dateStr === "Paid in Full") return "Paid in Full";
      if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
        const [y, m, d] = dateStr.split("-").map(Number);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${months[m - 1]} ${d}, ${y}`;
      }
      return dateStr;
    }

    // --- SUPPORT TICKET WORKFLOWS ---
    resolveSupportTicket(ticketId, resolutionNote, adminUser = "ADMIN (Limuel)") {
      const ticket = this.data.support.find(t => t.id === ticketId);
      if (!ticket) return { success: false, error: "Ticket not found" };
      if (!resolutionNote || !resolutionNote.trim()) {
        return { success: false, error: "A resolution note is required when resolving a ticket." };
      }

      ticket.status = "Resolved";
      ticket.resolutionNote = resolutionNote.trim();
      ticket.resolvedBy = adminUser;
      ticket.resolvedAt = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) + 
        ", " + new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

      if (!ticket.history) ticket.history = [];
      ticket.history.unshift({
        id: `TH-${Date.now().toString().slice(-4)}`,
        time: "Just now",
        user: adminUser,
        action: `Ticket marked as Resolved. Resolution note: "${resolutionNote.trim()}"`,
        type: "resolution"
      });

      this.logActivity(
        "Admin",
        adminUser,
        `ADMIN resolved support ticket ${ticketId} (${ticket.accountName}) · Resolution: ${resolutionNote.trim()}`,
        ticketId,
        {
          actorId: "ADMIN-01",
          recordType: "Support Ticket",
          details: { status: "Resolved", resolutionNote: resolutionNote.trim(), ticketId, account: ticket.accountName }
        }
      );
      this.save();
      return { success: true, ticket };
    }

    reopenSupportTicket(ticketId, reason = "", adminUser = "ADMIN (Limuel)") {
      const ticket = this.data.support.find(t => t.id === ticketId);
      if (!ticket) return { success: false, error: "Ticket not found" };

      const prevResolution = ticket.resolutionNote;
      ticket.status = "In Progress";

      if (!ticket.history) ticket.history = [];
      ticket.history.unshift({
        id: `TH-${Date.now().toString().slice(-4)}`,
        time: "Just now",
        user: adminUser,
        action: `Ticket reopened${reason ? ' · Reason: ' + reason.trim() : ''} (Previous resolution preserved: "${prevResolution || 'None'}")`,
        type: "reopen"
      });

      this.logActivity(
        "Admin",
        adminUser,
        `ADMIN reopened support ticket ${ticketId} (${ticket.accountName})${reason ? ' · Reason: ' + reason.trim() : ''}`,
        ticketId,
        {
          actorId: "ADMIN-01",
          recordType: "Support Ticket",
          details: { status: "In Progress", reason: reason.trim(), ticketId, account: ticket.accountName }
        }
      );
      this.save();
      return { success: true, ticket };
    }

    addTicketMessage(ticketId, text, sender = "ADMIN (Limuel)", role = "Admin") {
      const ticket = this.data.support.find(t => t.id === ticketId);
      if (!ticket) return { success: false, error: "Ticket not found" };
      if (!text || !text.trim()) return { success: false, error: "Message text cannot be empty." };

      if (!ticket.messages) ticket.messages = [];
      const msg = {
        id: `MSG-${Date.now().toString().slice(-4)}`,
        sender: sender,
        role: role,
        time: "Just now",
        text: text.trim()
      };
      ticket.messages.push(msg);

      if (!ticket.history) ticket.history = [];
      ticket.history.unshift({
        id: `TH-${Date.now().toString().slice(-4)}`,
        time: "Just now",
        user: sender,
        action: `Sent response to requester: "${text.trim().slice(0, 70)}${text.trim().length > 70 ? '...' : ''}"`,
        type: "message"
      });

      // If open, advance to In Progress
      if (ticket.status === "Open" && role === "Admin") {
        ticket.status = "In Progress";
        ticket.history.unshift({
          id: `TH-${Date.now().toString().slice(-4)}-st`,
          time: "Just now",
          user: sender,
          action: "Status automatically updated to In Progress following admin response",
          type: "status"
        });
      }

      this.logActivity(
        role === "Admin" ? "Admin" : (ticket.accountType || role),
        sender,
        `${role === "Admin" ? "ADMIN" : role} replied to support ticket ${ticketId} (${ticket.accountName}): "${text.trim().slice(0, 60)}..."`,
        ticketId,
        {
          actorId: role === "Admin" ? "ADMIN-01" : (ticket.accountId || role),
          recordType: "Support Ticket",
          details: { ticketId, sender, textPreview: text.trim().slice(0, 80) }
        }
      );
      this.save();
      return { success: true, message: msg, ticket };
    }

    updateSupportTicket(ticketId, newStatus, priority, note, assignedTo, adminUser = "ADMIN (Limuel)") {
      const ticket = this.data.support.find(t => t.id === ticketId);
      if (!ticket) return { success: false, error: "Ticket not found" };

      if (!ticket.history) ticket.history = [];

      const statusChanged = newStatus && newStatus !== ticket.status;
      const priorityChanged = priority && priority !== ticket.priority;
      const assignedChanged = assignedTo && assignedTo !== ticket.assignedTo;

      if (newStatus === "Resolved") {
        return this.resolveSupportTicket(ticketId, note, adminUser);
      }

      if (ticket.status === "Resolved" && newStatus && newStatus !== "Resolved") {
        return this.reopenSupportTicket(ticketId, note, adminUser);
      }

      if (statusChanged) {
        const oldSt = ticket.status;
        ticket.status = newStatus;
        ticket.history.unshift({
          id: `TH-${Date.now().toString().slice(-4)}`,
          time: "Just now",
          user: adminUser,
          action: `Status changed from "${oldSt}" to "${newStatus}"`,
          type: "status"
        });
      }

      if (priorityChanged) {
        const oldP = ticket.priority;
        ticket.priority = priority;
        ticket.history.unshift({
          id: `TH-${Date.now().toString().slice(-4)}`,
          time: "Just now",
          user: adminUser,
          action: `Priority adjusted from "${oldP}" to "${priority}"`,
          type: "priority"
        });
      }

      if (assignedChanged) {
        const oldAssigned = ticket.assignedTo;
        ticket.assignedTo = assignedTo;
        ticket.history.unshift({
          id: `TH-${Date.now().toString().slice(-4)}`,
          time: "Just now",
          user: adminUser,
          action: `Assigned admin updated to ${assignedTo} (was ${oldAssigned || 'Unassigned'})`,
          type: "assignment"
        });
      }

      if (note && note.trim()) {
        ticket.notes = note.trim();
        ticket.history.unshift({
          id: `TH-${Date.now().toString().slice(-4)}`,
          time: "Just now",
          user: adminUser,
          action: `Internal note recorded: "${note.trim()}"`,
          type: "note"
        });
      }

      this.logActivity(
        "Admin",
        adminUser,
        `ADMIN updated support ticket ${ticketId} (${ticket.accountName})`,
        ticketId,
        {
          actorId: "ADMIN-01",
          recordType: "Support Ticket",
          details: { ticketId, statusChanged, priorityChanged, assignedChanged, newStatus, priority, assignedTo }
        }
      );
      this.save();
      return { success: true, ticket };
    }

    getTicketActivity(ticketId) {
      const ticket = this.data.support.find(t => t.id === ticketId);
      const ticketHistory = (ticket && ticket.history) ? ticket.history.map(h => ({
        time: h.time,
        role: (h.user && h.user.includes("ADMIN")) ? "Admin" : (ticket.accountType || "User"),
        user: h.user,
        action: h.action,
        record: ticketId
      })) : [];

      const globalLogs = this.data.activity.filter(a => a.record === ticketId || (a.action && a.action.includes(ticketId)));
      
      const combined = [...ticketHistory];
      globalLogs.forEach(g => {
        if (!combined.some(c => c.action === g.action)) {
          combined.push(g);
        }
      });
      return combined;
    }

    // --- ACCOUNT WORKFLOWS ---
    updateAccountStatus(type, id, newStatus, reason = "") {
      let list = [];
      if (type === "customers") list = this.data.customers;
      else if (type === "financers") list = this.data.financers;
      else if (type === "installers") list = this.data.installers;
      else if (type === "merchants") list = this.data.merchants;

      const acc = list.find(a => a.id === id);
      if (!acc) return false;

      const oldStatus = acc.status;
      acc.status = newStatus;

      const roleName = type.slice(0, -1).toUpperCase();
      let actionVerb = "updated status of";
      if (newStatus === "Active") actionVerb = oldStatus === "Suspended" ? "restored" : "activated";
      else if (newStatus === "Inactive") actionVerb = "deactivated";
      else if (newStatus === "Suspended") actionVerb = "suspended";
      else if (newStatus === "Pending Review") actionVerb = "flagged for review";

      const note = reason ? ` — Reason: ${reason}` : "";
      this.logActivity(
        "Admin",
        "ADMIN (Limuel)",
        `ADMIN ${actionVerb} ${roleName} ${acc.id} (${acc.name})${note}`,
        acc.id,
        {
          actorId: "ADMIN-01",
          recordType: `${roleName.charAt(0) + roleName.slice(1).toLowerCase()} Account`,
          details: { accountType: type, prevStatus: oldStatus, newStatus, reason }
        }
      );
      this.save();
      return acc.status;
    }

    toggleAccountStatus(type, id) {
      let list = [];
      if (type === "customers") list = this.data.customers;
      else if (type === "financers") list = this.data.financers;
      else if (type === "installers") list = this.data.installers;
      else if (type === "merchants") list = this.data.merchants;

      const acc = list.find(a => a.id === id);
      if (!acc) return false;
      const target = acc.status === "Active" ? "Inactive" : "Active";
      return this.updateAccountStatus(type, id, target);
    }

    getAccountActivity(id) {
      if (!id) return [];
      return this.data.activity.filter(a => 
        a.record === id || 
        (a.action && a.action.includes(id))
      );
    }

    // --- DYNAMIC ATTENTION ITEMS ---
    getAttentionItems() {
      const items = [];
      const overdueLimit = Number(this.data.settings?.overdueThresholdDays) || 5;
      const delayLimit = Number(this.data.settings?.installationDelayThresholdDays) || 1;
      const docReviewLimit = Number(this.data.settings?.docReviewEscalationHours) || 48;

      // 1. Applications waiting review or missing docs (flagged based on docReviewEscalationHours)
      this.data.applications.forEach(a => {
        if (a.stage === "Missing Documents") {
          items.push({
            id: a.id,
            type: "Application",
            title: `Missing documents for ${a.id}`,
            context: `${a.customer} · ${a.location} · ${a.docs} uploaded (Review SLA: ${docReviewLimit}h)`,
            kind: "warn",
            actionLabel: "Review Application",
            actionType: "view_app",
            payload: a.id
          });
        } else if (a.stage === "Submitted") {
          items.push({
            id: a.id,
            type: "Application",
            title: `New application awaiting initial review`,
            context: `${a.customer} · ${a.system} · ${a.financer} (Escalate after ${docReviewLimit}h)`,
            kind: "warn",
            actionLabel: "Review",
            actionType: "view_app",
            payload: a.id
          });
        }
      });

      // 2. Delayed installations (driven by installationDelayThresholdDays)
      this.data.installations.forEach(j => {
        if (j.status === "Delayed") {
          items.push({
            id: j.id,
            type: "Installation",
            title: `Installation delayed: ${j.id}`,
            context: `${j.customer} · ${j.location} · ${j.installer} (Threshold: >${delayLimit}d)`,
            kind: "danger",
            actionLabel: "Manage Job",
            actionType: "view_job",
            payload: j.id
          });
        }
      });

      // 3. Overdue payments (driven by overdueThresholdDays)
      this.data.applications.forEach(a => {
        if (a.paymentStatus === "Overdue") {
          items.push({
            id: a.id,
            type: "Payment",
            title: `Overdue payment for ${a.id}`,
            context: `${a.customer} · ${a.financer} · ₱${(a.monthly || 0).toLocaleString()}/mo (Missed past ${overdueLimit}d grace: ${this.formatReadableDate(a.nextDue)})`,
            kind: "danger",
            actionLabel: "View Payment",
            actionType: "view_payment",
            payload: a.id
          });
        }
      });

      // 4. Open high-priority support tickets
      this.data.support.forEach(s => {
        if (s.status !== "Resolved" && s.priority === "High") {
          items.push({
            id: s.id,
            type: "Support",
            title: `High Priority Issue: ${s.id}`,
            context: `${s.accountType} (${s.accountName}) · ${s.concern}`,
            kind: "danger",
            actionLabel: "Resolve Ticket",
            actionType: "view_ticket",
            payload: s.id
          });
        }
      });

      return items;
    }
  }

  HelloSolarStore.prototype.parseActivityDate = parseActivityDate;
  HelloSolarStore.prototype.formatExactAuditTimestamp = formatExactAuditTimestamp;
  HelloSolarStore.prototype.formatRelativeAuditTime = formatRelativeAuditTime;
  HelloSolarStore.prototype.calculateRelativeTime = formatRelativeAuditTime;

  window.HelloSolarStore = HelloSolarStore;
  window.HELLO_SOLAR_DB = new HelloSolarStore();
  // Maintain backward compatibility for any script accessing window.HELLO_SOLAR_DATA
  window.HELLO_SOLAR_DATA = window.HELLO_SOLAR_DB.data;
})();