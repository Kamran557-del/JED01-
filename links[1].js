// ============================================================
// EDIT THIS FILE ONLY when you want to add/change a Google Sheet.
// No need to edit index.html.
// ============================================================

const SHEETS = [
  {
    category: "stock",
    type: "TRACKER",
    name: "JED04 Barcode Stock Consolidation — June 2026 Phase 01",
    description: "Barcode-level stock consolidation tracker.",
    url: "https://docs.google.com/spreadsheets/d/1J22k-yhRxRXfMlGNWTLW0xWDuMF9Ci-rjdUIAqrVqmA/edit?gid=0#gid=0"
  },
  {
    category: "stock",
    type: "TRACKER",
    name: "JED04 Barcode Stock Consolidation — July 2026 Phase 01",
    description: "Barcode-level stock consolidation tracker.",
    url: "https://docs.google.com/spreadsheets/d/1G8xzf0e4bPa5sE92m4Zo82mnDiOHMcWAZk1PXA72zHc/edit?gid=0#gid=0"
  },
  {
    category: "stock",
    type: "TRACKER",
    name: "JED04 Barcode Stock Consolidation — October 2025 Phase 02",
    description: "Barcode-level consolidation and clearance tracking.",
    url: "https://docs.google.com/spreadsheets/d/1O-0nBfMW73H5XGHZWhOErwxw1KbsMreMqrLPMuTe1mw/edit?usp=sharing"
  },
  {
    category: "stock",
    type: "TRACKER",
    name: "Footwear Stock Consolidation — June 2026",
    description: "Footwear stock consolidation tracker.",
    url: "https://docs.google.com/spreadsheets/d/19P_7fZ_DP6QewRpp2QOwYvBn2aOVDchC5-W3HcAcQ10/edit?gid=2037352706#gid=2037352706"
  },

  {
    category: "zone",
    type: "TRACKER",
    name: "JED04 E-Level Clearance Tracking",
    description: "E-level clearance and progress tracking.",
    url: "https://docs.google.com/spreadsheets/d/15GlgCkzocKHvtGnYzzn-Xrqow17lgVKQ44hor02poWU/edit?usp=sharing"
  },
  {
    category: "zone",
    type: "TRACKER",
    name: "A00-D Zone Tracking — Nov'25",
    description: "A00-D zone inventory tracking.",
    url: "https://docs.google.com/spreadsheets/d/14PbOI-eLu7EM1FRJ5IhC3UQge2VURLBkrW34dziPymk/edit?gid=1219272969#gid=1219272969"
  },
  {
    category: "zone",
    type: "TRACKER",
    name: "A01-E Zone Consolidation — May 2026",
    description: "A01-E zone consolidation tracker.",
    url: "https://docs.google.com/spreadsheets/d/1mCRy-TRCtctOVYm4de3EpcpAD6d9VWTc5ighJ_SGCWA/edit?usp=sharing"
  },
  {
    category: "zone",
    type: "TRACKER",
    name: "A01-E Update for A00-G",
    description: "Zone update and movement tracking.",
    url: "https://docs.google.com/spreadsheets/d/1zoUVSXo7qBi_hkXQSEXJvGajEOcCWP_vc0GWdMOx1kk/edit?gid=279705112#gid=279705112"
  },

  {
    category: "glass",
    type: "DAMAGE",
    name: "Tempered Glass Damage — May 2026",
    description: "Damage tracking and review.",
    url: "https://docs.google.com/spreadsheets/d/1NwQmvbRwv8a20g9oKAl-USpkSunE1lRzrvC_6jymv2M/edit?gid=1219272969#gid=1219272969"
  },
  {
    category: "glass",
    type: "TRACKER",
    name: "Tempered Glass Other Zone Tracking — May 2026",
    description: "Other-zone tempered glass tracking.",
    url: "https://docs.google.com/spreadsheets/d/1PhAYOD-DlhlLIJuq6jruoT8o19HsYSirqn-kiulJfpY/edit?usp=sharing"
  },
  {
    category: "glass",
    type: "ANALYSIS",
    name: "Tempered Glass Analysis",
    description: "Analysis and operational review.",
    url: "https://docs.google.com/spreadsheets/d/1E2HrUW5JSJL5sWDvuiFIyGJ8eJNw-V2HqHHL6e8w-14/edit?gid=1432896378#gid=1432896378"
  }
];

function updateCounts(){
  for (const category of ["stock","zone","glass"]) {
    const el = document.getElementById(category + "Count");
    if (el) el.textContent = SHEETS.filter(s => s.category === category).length;
  }
}
updateCounts();
