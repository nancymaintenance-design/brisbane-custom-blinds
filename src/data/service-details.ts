import curtainWide from "@/assets/example-curtain-installation-wide.jpg";
import curtainRoom from "@/assets/example-curtain-installation-room.jpg";
import curtainDoorway from "@/assets/example-curtain-installation-doorway.jpg";
import rollerBlindOne from "@/assets/example-roller-blind-installation-01.jpg";
import dualRollerBlind from "@/assets/example-dual-roller-blind-installation.jpg";
import rollerBlindTwo from "@/assets/example-roller-blind-installation-02.jpg";
import motorisedImage from "@/assets/motorised-service.jpg";
import repairImage from "@/assets/repairs-service.jpg";

export type ServiceCategory = "Curtains" | "Blinds" | "Motorised" | "Repairs";

export interface ServiceDetail {
  slug: string;
  category: ServiceCategory;
  hubPath: "/curtains" | "/blinds" | "/motorised-curtains" | "/curtain-repairs";
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  image: string;
  imageAlt: string;
  evidence: "Real Example Services project photo" | "Illustrative service image";
  scopeTitle: string;
  scope: string[];
  assessmentTitle: string;
  assessment: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export interface ServiceDecisionCard {
  title: string;
  summary: string;
  check: string;
}

export interface ServiceEvidenceImage {
  image: string;
  alt: string;
  caption: string;
}

export interface ServiceDepth {
  decisionTitle: string;
  decisionIntro: string;
  decisionCards: ServiceDecisionCard[];
  fitTitle: string;
  fitSignals: string[];
  quoteFactors: string[];
  inclusions: string[];
  boundaries: string[];
  evidenceTitle: string;
  evidenceIntro: string;
  evidenceImages: ServiceEvidenceImage[];
}

const commonProcess = [
  { title: "Share the opening", text: "Send the suburb, approximate dimensions and clear photos of the full window or door." },
  { title: "Discuss the requirement", text: "Explain the privacy, light-control, access or operating issue you want to address." },
  { title: "Confirm the next step", text: "Product suitability, availability and any on-site assessment are confirmed for the individual enquiry." },
];

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "s-fold-curtains-brisbane", category: "Curtains", hubPath: "/curtains",
    title: "S-fold curtains for Brisbane homes", metaTitle: "S-Fold Curtains Brisbane | Brisbane Curtains Online",
    metaDescription: "Discuss made-to-measure S-fold curtains, compatible tracks, fabric and lining options for Brisbane homes.",
    intro: "S-fold curtains create an even wave across a compatible track. The opening, stack-back space, fabric weight and preferred privacy level all help determine whether this heading suits the room.",
    image: curtainWide, imageAlt: "Example Services curtain installation across a wide residential opening", evidence: "Real Example Services project photo",
    scopeTitle: "What an S-fold curtain enquiry can cover", scope: ["Single or layered curtain layouts", "Sheer, lined and blockout fabric discussions", "Ceiling- or wall-mounted track requirements", "Stack-back and opening-clearance considerations"],
    assessmentTitle: "What helps us assess the opening", assessment: ["Full-width photo of the opening", "Approximate width and ceiling height", "Preferred curtain drop and track position", "Any doors, air-conditioning or furniture nearby"], process: commonProcess,
    faqs: [
      { q: "Do S-fold curtains need a special track?", a: "They require a compatible track and carriers that create the regular wave. Track position and mounting conditions should be reviewed for the opening." },
      { q: "Can S-fold curtains include sheer and blockout layers?", a: "Layered arrangements can be discussed where the opening, track position and stack-back space suit the proposed configuration." },
      { q: "How is pricing determined?", a: "Pricing depends on dimensions, fabric, lining, track specification, access and installation scope. A written quote requires the individual project details." },
    ],
  },
  {
    slug: "sheer-blockout-curtains-brisbane", category: "Curtains", hubPath: "/curtains",
    title: "Sheer and blockout curtains in Brisbane", metaTitle: "Sheer & Blockout Curtains Brisbane | Custom Curtains",
    metaDescription: "Compare sheer, blockout and layered curtain options for privacy and light control in Brisbane homes.",
    intro: "Sheer and blockout layers can balance filtered daylight with stronger evening privacy. Window orientation, room use, track space and the desired finish guide the discussion.",
    image: curtainRoom, imageAlt: "Example Services installed curtains in a Brisbane residential room", evidence: "Real Example Services project photo",
    scopeTitle: "Layering options to discuss", scope: ["Daytime sheer curtains", "Lined or blockout outer curtains", "Separate tracks for independent control", "Fabric colour, texture and care needs"],
    assessmentTitle: "Information that helps", assessment: ["Room type and window direction", "Privacy and light-control priorities", "Photos showing the opening and surrounds", "Preferred colours or existing interior finishes"], process: commonProcess,
    faqs: [
      { q: "Do sheer curtains provide privacy at night?", a: "Sheers generally provide less privacy when the interior is lit at night, which is why a separate blockout or lined layer is often discussed." },
      { q: "Can both layers operate separately?", a: "A suitable double-track arrangement can allow independent operation, subject to mounting space and the selected system." },
      { q: "Are blockout curtains completely light-proof?", a: "Fabric and installation can reduce light substantially, but edge gaps and the opening configuration affect the result. Requirements should be discussed before selection." },
    ],
  },
  {
    slug: "curtain-tracks-headings-brisbane", category: "Curtains", hubPath: "/curtains",
    title: "Curtain tracks and heading options in Brisbane", metaTitle: "Curtain Tracks & Headings Brisbane | Curtain Installation",
    metaDescription: "Discuss curtain tracks, S-fold and pleated headings, mounting positions and opening requirements in Brisbane.",
    intro: "Tracks and curtain headings work as a system. The mounting surface, opening width, curtain weight and required movement need to be considered together.",
    image: curtainDoorway, imageAlt: "Example Services curtain installation at a residential doorway", evidence: "Real Example Services project photo",
    scopeTitle: "Track and heading considerations", scope: ["Ceiling or wall mounting", "S-fold and pleated heading compatibility", "Single and layered track layouts", "Corners, returns and wide openings"],
    assessmentTitle: "What to photograph", assessment: ["The full wall and opening", "Ceiling and lintel area", "Existing brackets or tracks", "Obstacles across the proposed curtain path"], process: commonProcess,
    faqs: [
      { q: "Can an existing curtain track be reused?", a: "Reuse depends on its condition, dimensions, mounting, carrier compatibility and the weight of the proposed curtains." },
      { q: "Is ceiling mounting always possible?", a: "The mounting surface and concealed services need to be considered. Suitability cannot be confirmed from room dimensions alone." },
      { q: "Which heading is best?", a: "There is no single best heading. The preferred look, opening, track type, stack-back and fabric all influence the suitable option." },
    ],
  },
  {
    slug: "roller-blinds-brisbane", category: "Blinds", hubPath: "/blinds",
    title: "Custom roller blinds for Brisbane homes", metaTitle: "Roller Blinds Brisbane | Custom Window Blinds",
    metaDescription: "Discuss custom roller blinds, sunscreen, translucent and blockout fabrics for Brisbane windows.",
    intro: "Roller blinds are a compact option for privacy and light control. Window dimensions, recess depth, fabric performance and control position shape the final specification.",
    image: rollerBlindOne, imageAlt: "Example Services roller blind installation in a residential window", evidence: "Real Example Services project photo",
    scopeTitle: "Roller blind options", scope: ["Sunscreen, translucent and blockout fabrics", "Face-fit or recess-fit discussion", "Chain position and child-safety considerations", "Colour and finish selection"],
    assessmentTitle: "Opening details to share", assessment: ["Inside and outside opening photos", "Approximate width and drop", "Window handles and obstructions", "Room use and light-control priority"], process: commonProcess,
    faqs: [
      { q: "Should roller blinds sit inside or outside the recess?", a: "The recess depth, handles, gaps and the desired coverage all affect the suitable fit." },
      { q: "What is the difference between sunscreen and blockout fabric?", a: "Sunscreen fabric filters light and preserves some outward view, while blockout fabric is intended for stronger light and privacy control." },
      { q: "Can roller blinds be made for wide windows?", a: "Possible configurations depend on width, fabric, tube specification and the desired control. The opening must be assessed before suitability is confirmed." },
    ],
  },
  {
    slug: "dual-roller-blinds-brisbane", category: "Blinds", hubPath: "/blinds",
    title: "Dual roller blinds in Brisbane", metaTitle: "Dual Roller Blinds Brisbane | Day & Night Blinds",
    metaDescription: "Discuss dual roller blind combinations for daytime light filtering and evening privacy in Brisbane homes.",
    intro: "Dual roller blinds combine two fabrics at one opening, commonly a sunscreen or translucent layer with a blockout layer. Recess space and control clearance are important.",
    image: dualRollerBlind, imageAlt: "Example Services dual roller blind installation at a Brisbane residence", evidence: "Real Example Services project photo",
    scopeTitle: "What dual blinds can combine", scope: ["Separate daytime and blockout layers", "Independent controls", "Front- or reverse-roll configurations", "Coordinated fabric colours"],
    assessmentTitle: "Compatibility checks", assessment: ["Available depth around the opening", "Handles, locks and screens", "Preferred control sides", "Coverage and privacy expectations"], process: commonProcess,
    faqs: [
      { q: "Do both blinds fit inside the window recess?", a: "That depends on recess depth, obstructions and the selected hardware. Face fitting may be discussed where space is limited." },
      { q: "Can I use two blockout fabrics?", a: "Fabric combinations can be discussed, but the practical benefit, weight and hardware requirements should be considered for the opening." },
      { q: "Are dual blinds the same as day-night blinds?", a: "The terms are often used for two-layer arrangements, but product construction varies. Confirm the exact system and fabric combination when enquiring." },
    ],
  },
  {
    slug: "roman-venetian-blinds-brisbane", category: "Blinds", hubPath: "/blinds",
    title: "Roman and Venetian blind options in Brisbane", metaTitle: "Roman & Venetian Blinds Brisbane | Custom Blinds",
    metaDescription: "Compare Roman and Venetian blind options, finishes and light-control requirements for Brisbane homes.",
    intro: "Roman blinds offer a soft folded fabric finish, while Venetian blinds use adjustable slats. The room, opening and maintenance preferences help narrow the choice.",
    image: rollerBlindTwo, imageAlt: "Example Services fitted blind at a residential opening", evidence: "Real Example Services project photo",
    scopeTitle: "Options to compare", scope: ["Soft Roman blind folds", "Adjustable Venetian slats", "Fabric, timber-look or selected finishes", "Privacy and daylight control"],
    assessmentTitle: "Selection factors", assessment: ["Interior style and room use", "Moisture and cleaning requirements", "Opening size and clearance", "Preferred control and maintenance needs"], process: commonProcess,
    faqs: [
      { q: "Are Roman blinds suitable for every window?", a: "The fold stack, opening dimensions, fabric and nearby obstacles need to be considered for each window." },
      { q: "Which is easier to clean?", a: "Cleaning requirements vary by fabric, slat material and room conditions. Manufacturer care instructions should guide maintenance." },
      { q: "Can Venetian blinds provide precise light control?", a: "Tilting slats can vary light and privacy, but edge gaps and the specific product affect the final result." },
    ],
  },
  {
    slug: "motorised-curtain-tracks-brisbane", category: "Motorised", hubPath: "/motorised-curtains",
    title: "Motorised curtain tracks in Brisbane", metaTitle: "Motorised Curtain Tracks Brisbane | Automated Curtains",
    metaDescription: "Discuss motorised curtain tracks, opening size, curtain weight, controls and power requirements in Brisbane.",
    intro: "A motorised track needs to suit the curtain weight, travel distance, mounting conditions and preferred control method. Electrical requirements are confirmed separately where relevant.",
    image: motorisedImage, imageAlt: "Illustrative view of curtains suitable for a motorised track discussion", evidence: "Illustrative service image",
    scopeTitle: "System requirements to discuss", scope: ["Straight or selected shaped tracks", "Curtain weight and opening direction", "Remote or compatible app controls", "Rechargeable or powered arrangements"],
    assessmentTitle: "What helps with compatibility", assessment: ["Opening width and ceiling height", "Photos of mounting surfaces", "Curtain type and approximate weight", "Nearby power and preferred controls"], process: commonProcess,
    faqs: [
      { q: "Can a motorised track carry any curtain?", a: "Capacity varies by system, track length and curtain weight. Compatibility needs to be checked for the intended curtains." },
      { q: "Is an electrician always required?", a: "Rechargeable systems may not require fixed wiring. Any new fixed electrical work must be completed by an appropriately licensed provider." },
      { q: "Can curtains open from the centre?", a: "Selected systems support centre opening or one-way travel. The track and curtain arrangement must be specified accordingly." },
    ],
  },
  {
    slug: "motorised-blinds-brisbane", category: "Motorised", hubPath: "/motorised-curtains",
    title: "Motorised blind enquiries in Brisbane", metaTitle: "Motorised Blinds Brisbane | Automated Window Blinds",
    metaDescription: "Discuss motorised roller blind options, controls, power and window compatibility for Brisbane homes.",
    intro: "Motorised blinds can support hard-to-reach openings and convenient daily control. Blind dimensions, fabric weight, power and control compatibility must be reviewed together.",
    image: motorisedImage, imageAlt: "Illustrative interior showing automated window furnishing context", evidence: "Illustrative service image",
    scopeTitle: "Motorised blind considerations", scope: ["New motorised roller blind enquiries", "Rechargeable and selected powered options", "Remote and compatible control choices", "High or difficult-to-reach windows"],
    assessmentTitle: "Details needed before selection", assessment: ["Window dimensions and location", "Fabric and light-control goal", "Access for charging or power", "Existing automation platform, if any"], process: commonProcess,
    faqs: [
      { q: "Can an existing roller blind be motorised?", a: "Some systems may be replaced or adapted, but tube, fabric, dimensions and hardware compatibility need assessment." },
      { q: "How often do rechargeable blinds need charging?", a: "Charging intervals vary by motor, blind size, use frequency and manufacturer specification." },
      { q: "Can several blinds operate together?", a: "Group control may be available with compatible products and controls. The proposed number and layout should be included in the enquiry." },
    ],
  },
  {
    slug: "curtain-control-options-brisbane", category: "Motorised", hubPath: "/motorised-curtains",
    title: "Curtain control and automation options in Brisbane", metaTitle: "Curtain Automation & Controls Brisbane | Motorised Curtains",
    metaDescription: "Compare remote, app and compatible automation control options for motorised curtains in Brisbane.",
    intro: "Control choices range from dedicated remotes to selected app or automation integrations. Availability depends on the motor system and the wider property setup.",
    image: motorisedImage, imageAlt: "Illustrative room with curtains for an automation control enquiry", evidence: "Illustrative service image",
    scopeTitle: "Control functions to discuss", scope: ["Dedicated handheld controls", "Wall controls where compatible", "Selected app-based operation", "Schedules or grouped operation where supported"],
    assessmentTitle: "Integration information", assessment: ["Selected or existing motor brand", "Current smart-home platform", "Rooms and number of openings", "Desired users, schedules and controls"], process: commonProcess,
    faqs: [
      { q: "Will motorised curtains work with my smart-home platform?", a: "Compatibility depends on the motor, gateway and platform. Share the platform name before any integration is assumed." },
      { q: "Can I keep a physical remote?", a: "Many systems offer a dedicated remote, but available control combinations depend on the selected product." },
      { q: "Who completes electrical or integration work?", a: "Any regulated electrical work requires an appropriately licensed provider. Specialist automation work may also need separate coordination." },
    ],
  },
  {
    slug: "curtain-track-repairs-brisbane", category: "Repairs", hubPath: "/curtain-repairs",
    title: "Curtain track repair enquiries in Brisbane", metaTitle: "Curtain Track Repairs Brisbane | Curtain Repairs",
    metaDescription: "Discuss sticking, damaged or loose curtain track repair and replacement enquiries in Brisbane.",
    intro: "A sticking, loose or damaged curtain track may involve carriers, brackets, joins, cord operation or the mounting surface. Photos help separate a repair from replacement scope.",
    image: repairImage, imageAlt: "Illustrative technician inspecting a curtain track", evidence: "Illustrative service image",
    scopeTitle: "Track issues to describe", scope: ["Sticking or uneven curtain travel", "Loose brackets or track sections", "Damaged carriers and gliders", "Corded track operating faults"],
    assessmentTitle: "Photos that help", assessment: ["Full track from end to end", "Close-up of the fault", "Bracket and mounting surface", "Curtain heading and attachment points"], process: commonProcess,
    faqs: [
      { q: "Can every curtain track be repaired?", a: "No. Parts availability, track condition, mounting damage and compatibility determine whether repair or replacement is practical." },
      { q: "Should I remove the curtains first?", a: "Keep the curtains in place for initial photos unless there is an immediate safety concern. Instructions can be discussed after the fault is reviewed." },
      { q: "Can a manual track be replaced with a motorised one?", a: "That can be discussed as a separate upgrade enquiry, subject to opening, curtain and power compatibility." },
    ],
  },
  {
    slug: "blind-mechanism-repairs-brisbane", category: "Repairs", hubPath: "/curtain-repairs",
    title: "Blind mechanism repair enquiries in Brisbane", metaTitle: "Blind Repairs Brisbane | Roller Blind Mechanisms",
    metaDescription: "Discuss roller blind chain, cord, bracket and mechanism repair enquiries in Brisbane.",
    intro: "Blind operating faults can involve chains, cords, clutches, brackets, tubes or fabric alignment. Product-specific photos help identify whether compatible parts may be available.",
    image: repairImage, imageAlt: "Illustrative technician reviewing a blind and curtain fitting", evidence: "Illustrative service image",
    scopeTitle: "Common mechanism enquiries", scope: ["Chains or cords not operating", "Blind not staying in position", "Loose or damaged brackets", "Fabric tracking or alignment concerns"],
    assessmentTitle: "Product details to provide", assessment: ["Full blind and window photo", "Close-up of both brackets", "Operating side and faulty part", "Any visible product label or brand"], process: commonProcess,
    faqs: [
      { q: "Are replacement parts available for every blind?", a: "No. Availability depends on brand, age, dimensions and component compatibility." },
      { q: "Can torn blind fabric be repaired?", a: "Minor issues and replacement options depend on fabric and construction. Clear photos are needed before feasibility can be discussed." },
      { q: "Do you repair blinds supplied by another company?", a: "Enquiries are welcome, but repair feasibility and parts availability must be confirmed for the specific product." },
    ],
  },
  {
    slug: "curtain-alterations-care-brisbane", category: "Repairs", hubPath: "/curtain-repairs",
    title: "Curtain alterations and care enquiries in Brisbane", metaTitle: "Curtain Alterations Brisbane | Curtain Care Enquiries",
    metaDescription: "Discuss curtain length, lining, heading alteration and fabric care enquiries in Brisbane.",
    intro: "Curtain alterations depend on fabric, lining, heading construction, available hems and the required finished length. Care advice should follow the fabric and manufacturer requirements.",
    image: repairImage, imageAlt: "Illustrative curtain fitting and alteration assessment", evidence: "Illustrative service image",
    scopeTitle: "Alteration and care topics", scope: ["Length and hem changes", "Selected lining enquiries", "Heading compatibility review", "Fabric care and cleaning discussion"],
    assessmentTitle: "Information to share", assessment: ["Photos of the full curtain", "Heading, hem and care label close-ups", "Current and desired finished length", "Fabric or supplier details if available"], process: commonProcess,
    faqs: [
      { q: "Can all curtains be shortened?", a: "No. Fabric, lining, weights, patterns and construction can limit alteration options." },
      { q: "Can a curtain heading be changed?", a: "Some changes may be possible, but available fabric, fullness and track compatibility need to be reviewed." },
      { q: "Do you provide a fixed cleaning method online?", a: "No. Care requirements vary by fabric and manufacturer, and an unsuitable method can cause damage. Product details need to be checked first." },
    ],
  },
];

type DecisionGuide = Pick<ServiceDepth, "decisionTitle" | "decisionIntro" | "decisionCards" | "fitTitle" | "fitSignals">;
type CategoryGuide = Pick<ServiceDepth, "quoteFactors" | "inclusions" | "boundaries" | "evidenceTitle" | "evidenceIntro" | "evidenceImages">;

const DETAIL_DECISIONS: Record<string, DecisionGuide> = {
  "s-fold-curtains-brisbane": {
    decisionTitle: "Is an S-fold curtain the right fit for the opening?",
    decisionIntro: "The wave is only one part of the decision. Track position, stack-back, fabric weight and the way the opening is used need to work together.",
    decisionCards: [
      { title: "Clean, regular wave", summary: "Best suited to rooms where a continuous, contemporary curtain line is the priority.", check: "Check the available wall or ceiling line and the desired finished drop." },
      { title: "Layered light control", summary: "A sheer and blockout arrangement can separate daytime filtering from evening privacy.", check: "Check that there is enough track and stack-back space for two layers." },
      { title: "Wide doors and windows", summary: "The heading can work across broad openings when track support and curtain weight are resolved.", check: "Check doors, handles, air-conditioning and furniture along the travel path." },
    ],
    fitTitle: "Room and opening checks before selection",
    fitSignals: ["Opening width, finished drop and usable stack-back", "Ceiling- or wall-mounting surface", "Curtain weight and preferred fullness", "Daily access through doors or sliders"],
  },
  "sheer-blockout-curtains-brisbane": {
    decisionTitle: "Choose the layers around privacy, glare and room use",
    decisionIntro: "A layered curtain should answer a real room problem. The useful combination depends on when privacy is needed and how much daylight should remain.",
    decisionCards: [
      { title: "Daytime filtering", summary: "Sheers soften direct light while retaining a lighter appearance during the day.", check: "Check window direction, overlooking and daytime glare." },
      { title: "Evening privacy", summary: "A lined or blockout outer layer provides stronger coverage after dark.", check: "Check edge coverage and whether the room needs stronger light reduction." },
      { title: "Independent control", summary: "Separate tracks allow each layer to move without operating the other.", check: "Check the mounting depth and stack-back required by both layers." },
    ],
    fitTitle: "Details that change a layered curtain specification",
    fitSignals: ["Bedroom, living area or media-room use", "Window orientation and neighbouring sightlines", "Existing pelmets, tracks or ceiling features", "Preferred fabric texture, colour and care needs"],
  },
  "curtain-tracks-headings-brisbane": {
    decisionTitle: "Match the heading, track and mounting surface as one system",
    decisionIntro: "A heading cannot be selected in isolation. Carrier spacing, curtain weight, fixing position and the opening geometry determine whether the system will move and sit correctly.",
    decisionCards: [
      { title: "Ceiling-mounted track", summary: "Creates a full-height line where the ceiling and fixing conditions are suitable.", check: "Check the substrate, concealed services and any cornice or bulkhead." },
      { title: "Wall-mounted track", summary: "Useful where ceiling mounting is unsuitable or a defined stand-off is needed.", check: "Check bracket projection, lintel clearance and curtain return." },
      { title: "Heading compatibility", summary: "S-fold, pleated and other headings require compatible carriers and fullness.", check: "Check whether existing tracks and hooks can safely be reused." },
    ],
    fitTitle: "Track-planning details worth photographing",
    fitSignals: ["Full wall, ceiling and opening", "Corners, returns and joins", "Existing brackets, carriers and track labels", "Obstacles across the proposed curtain path"],
  },
  "roller-blinds-brisbane": {
    decisionTitle: "Start with the light-control job the blind needs to do",
    decisionIntro: "Roller blind fabric and fit should be selected together. A compact blind can still leave unwanted gaps if the recess, handles and coverage are not considered.",
    decisionCards: [
      { title: "Sunscreen fabric", summary: "Filters glare and can retain some outward view during daylight.", check: "Check privacy expectations after dark and the direction of direct sun." },
      { title: "Translucent fabric", summary: "Diffuses daylight while obscuring a clearer view through the window.", check: "Check the balance between brightness and privacy for the room." },
      { title: "Blockout fabric", summary: "Provides stronger light and privacy control than open-weave fabrics.", check: "Check face-fit versus recess-fit coverage and expected edge gaps." },
    ],
    fitTitle: "Window details that affect roller blind fit",
    fitSignals: ["Recess depth and window handles", "Face-fit or recess-fit preference", "Control side and child-safety positioning", "Width, drop and expected edge coverage"],
  },
  "dual-roller-blinds-brisbane": {
    decisionTitle: "Use two layers only when each layer has a clear purpose",
    decisionIntro: "Dual rollers are most useful when one fabric manages daytime conditions and the second provides stronger privacy or light control.",
    decisionCards: [
      { title: "Sunscreen plus blockout", summary: "A common combination for changing between daytime filtering and evening coverage.", check: "Check which layer should sit closest to the glass and how each rolls." },
      { title: "Translucent plus blockout", summary: "Keeps a softer daytime light while retaining a separate stronger-coverage layer.", check: "Check the required privacy level and how the fabrics appear together." },
      { title: "Face-fit dual system", summary: "Can be considered when the recess cannot comfortably house two rollers.", check: "Check wall clearance, architraves and the finished projection." },
    ],
    fitTitle: "Compatibility checks for two rollers",
    fitSignals: ["Usable recess depth", "Window locks, screens and handles", "Front- or reverse-roll preference", "Independent control positions"],
  },
  "roman-venetian-blinds-brisbane": {
    decisionTitle: "Compare a soft fabric finish with adjustable slats",
    decisionIntro: "Roman and Venetian blinds create different visual weight, cleaning needs and light control. The room conditions should lead the choice.",
    decisionCards: [
      { title: "Roman blind", summary: "A fabric blind with visible folds and a softer furnished appearance.", check: "Check fold stack, pattern, lining and the available space above the opening." },
      { title: "Venetian blind", summary: "Adjustable slats provide variable light direction and privacy.", check: "Check slat finish, cleaning expectations and moisture exposure." },
      { title: "Alternative roller option", summary: "A roller may be the simpler choice where compact operation is more important than folds or slats.", check: "Compare maintenance, coverage and the visual finish before deciding." },
    ],
    fitTitle: "Room conditions that help narrow the choice",
    fitSignals: ["Moisture, dust and cleaning requirements", "Desired view and daylight adjustment", "Fold or slat clearance", "Interior materials and preferred finish"],
  },
  "motorised-curtain-tracks-brisbane": {
    decisionTitle: "Confirm load, travel and control before choosing a motor",
    decisionIntro: "Motorisation is a system decision. Track length, curtain weight, mounting support and power all need to match the proposed operation.",
    decisionCards: [
      { title: "Straight track", summary: "The most direct configuration for a single straight opening.", check: "Check total travel, curtain split and stacking direction." },
      { title: "Wide or heavy curtain", summary: "Larger openings require closer attention to motor capacity and track support.", check: "Check curtain type, approximate weight and fixing conditions." },
      { title: "Layered motorisation", summary: "Separate sheer and blockout layers may require separate tracks and controls.", check: "Check ceiling space, power and how the layers should operate." },
    ],
    fitTitle: "System information needed before compatibility can be confirmed",
    fitSignals: ["Track length and curtain weight", "Opening direction and stack position", "Mounting surface and access", "Power source and preferred control method"],
  },
  "motorised-blinds-brisbane": {
    decisionTitle: "Match the blind, motor and power arrangement",
    decisionIntro: "A motorised blind must remain suitable for the width, fabric and tube as well as the way power and controls will be provided.",
    decisionCards: [
      { title: "Rechargeable option", summary: "May reduce fixed wiring requirements where a compatible blind system is available.", check: "Check charging access and expected operating frequency." },
      { title: "Wired option", summary: "Can suit planned installations where power and regulated electrical work are coordinated.", check: "Check cable routes and the appropriately licensed electrical scope." },
      { title: "Grouped operation", summary: "Multiple compatible blinds may be controlled together where the selected system supports it.", check: "Check rooms, zones and whether individual control is also required." },
    ],
    fitTitle: "Blind and power details to review together",
    fitSignals: ["Blind width, drop and fabric", "Motor capacity and tube compatibility", "Charging or fixed-power access", "Individual, grouped or scheduled operation"],
  },
  "curtain-control-options-brisbane": {
    decisionTitle: "Choose controls around the people who will use them",
    decisionIntro: "A control method should be understandable, reachable and compatible with the selected motor. Smart-home integration is optional, not a default requirement.",
    decisionCards: [
      { title: "Dedicated remote", summary: "A direct control option without relying on a phone for everyday operation.", check: "Check the number of channels, rooms and users." },
      { title: "Compatible app", summary: "Can add phone control and selected scheduling where supported by the motor ecosystem.", check: "Check gateway, network and account requirements before promising compatibility." },
      { title: "Automation integration", summary: "Selected systems may connect with a broader home-automation platform.", check: "Confirm the exact platform and specialist integration scope." },
    ],
    fitTitle: "Control requirements to define before product selection",
    fitSignals: ["Who needs access to the controls", "Rooms and number of openings", "Existing motor or smart-home platform", "Schedules, groups and manual override expectations"],
  },
  "curtain-track-repairs-brisbane": {
    decisionTitle: "Separate a serviceable track fault from a replacement problem",
    decisionIntro: "The visible symptom does not always identify the failed part. Track condition, carriers, brackets, cord operation and mounting damage all affect the repair path.",
    decisionCards: [
      { title: "Movement fault", summary: "Sticking, uneven travel or a curtain that will not close can involve carriers, joins or alignment.", check: "Check where movement stops and whether the track is visibly bent." },
      { title: "Fixing fault", summary: "Loose brackets or track sections may involve the mounting surface as well as the hardware.", check: "Check for movement, cracking or pulled fixings around each bracket." },
      { title: "Parts compatibility", summary: "Older or unidentified systems may not have compatible replacement components.", check: "Photograph labels, end caps, carriers and operating parts." },
    ],
    fitTitle: "Evidence that helps decide repair versus replacement",
    fitSignals: ["Full track and curtain", "Close-up of the point of failure", "Mounting surface and brackets", "Brand, label or component shape"],
  },
  "blind-mechanism-repairs-brisbane": {
    decisionTitle: "Identify whether the fault is in the control, bracket or blind body",
    decisionIntro: "A blind that will not move or stay in position can have different causes. Product identification and close photos reduce guesswork before a visit is discussed.",
    decisionCards: [
      { title: "Chain or cord fault", summary: "The operating control may be disconnected, worn or incompatible with the mechanism.", check: "Check the control loop, clutch side and any broken connector." },
      { title: "Bracket or tube fault", summary: "Loose brackets or a displaced tube can affect alignment and operation.", check: "Check both ends of the blind and the mounting surface." },
      { title: "Fabric tracking fault", summary: "Uneven rolling may relate to alignment, fabric condition or the installation.", check: "Photograph the blind fully lowered and partly rolled." },
    ],
    fitTitle: "Product details that make a repair enquiry useful",
    fitSignals: ["Full blind and window", "Both brackets and control side", "Visible label or brand", "Short description of how the fault developed"],
  },
  "curtain-alterations-care-brisbane": {
    decisionTitle: "Check construction before promising an alteration",
    decisionIntro: "Curtain length, lining and heading changes depend on the material already available in the curtain and how it was originally made.",
    decisionCards: [
      { title: "Length alteration", summary: "A hem change may be possible where fabric, weights and pattern placement allow it.", check: "Check the existing hem depth and required finished clearance." },
      { title: "Heading alteration", summary: "Changing the heading can affect fullness, finished width and track compatibility.", check: "Check the current heading, hooks, fabric width and proposed track." },
      { title: "Care enquiry", summary: "Cleaning and care must follow the fabric construction and available manufacturer guidance.", check: "Check care labels, lining and any existing damage before choosing a method." },
    ],
    fitTitle: "Curtain details to document before alteration or care advice",
    fitSignals: ["Full curtain in its installed position", "Heading, hem and care labels", "Current and desired finished length", "Fabric, lining and supplier information"],
  },
};

const CATEGORY_GUIDANCE: Record<ServiceCategory, CategoryGuide> = {
  Curtains: {
    quoteFactors: ["Opening width, drop and number of curtain layers", "Fabric, lining, fullness and heading", "Track type, corners and mounting position", "Access, removal and installation scope"],
    inclusions: ["Review of the opening information and photos", "Discussion of curtain, heading and track compatibility", "Confirmation of any measuring or on-site assessment required", "Written scope before approved work proceeds"],
    boundaries: ["Fabric colour and availability remain subject to the selected supplier", "Existing tracks are reused only when condition and compatibility are confirmed", "No exact performance or price is promised from photos alone"],
    evidenceTitle: "Installed curtain details from Example Services work",
    evidenceIntro: "These real project photos show the kind of opening, track position and finished curtain coverage that are useful when discussing a new enquiry. They are evidence of related installed work, not a promise that every opening uses the same specification.",
    evidenceImages: [
      { image: curtainWide, alt: "Wide curtain installation completed by Example Services", caption: "Wide residential opening and full-height curtain coverage" },
      { image: curtainRoom, alt: "Curtain installation in a furnished room completed by Example Services", caption: "Installed curtain in its room context" },
      { image: curtainDoorway, alt: "Curtain installation at a doorway completed by Example Services", caption: "Doorway clearance and curtain stack position" },
    ],
  },
  Blinds: {
    quoteFactors: ["Window width, drop and quantity", "Fabric, finish and control type", "Recess-fit or face-fit hardware", "Access, removal and installation scope"],
    inclusions: ["Review of window photos and approximate dimensions", "Discussion of fabric and fit options", "Confirmation of controls and child-safety positioning", "Written scope before approved work proceeds"],
    boundaries: ["Final fabric and component availability depends on the selected system", "Edge gaps and light control depend on the fit and opening", "No exact price or performance claim is made without project details"],
    evidenceTitle: "Installed blind details from Example Services work",
    evidenceIntro: "These real project photos demonstrate roller blind fit, control position and coverage at completed residential openings. The final product and fitting method still need to be selected for each window.",
    evidenceImages: [
      { image: rollerBlindOne, alt: "Roller blind fitted by Example Services", caption: "Roller blind coverage within a residential opening" },
      { image: dualRollerBlind, alt: "Dual roller blind installation completed by Example Services", caption: "Two-layer blind arrangement and independent controls" },
      { image: rollerBlindTwo, alt: "Residential blind installation completed by Example Services", caption: "Blind fit and surrounding window clearance" },
    ],
  },
  Motorised: {
    quoteFactors: ["Opening dimensions, curtain or blind weight", "Motor, track or tube specification", "Power, charging and control requirements", "Access and any specialist integration scope"],
    inclusions: ["Review of the opening and proposed operation", "Compatibility discussion for motor, product and controls", "Identification of information needed from electrical or automation providers", "Written scope before approved work proceeds"],
    boundaries: ["The current page image is illustrative, not a completed-project record", "Smart-home compatibility is not assumed without exact platform details", "Regulated electrical work requires an appropriately licensed provider"],
    evidenceTitle: "Compatibility must be established for the specific opening",
    evidenceIntro: "No motorised project gallery is being presented as proof on this page. Product capacity, power and control compatibility are confirmed from the actual opening, selected system and any specialist requirements.",
    evidenceImages: [],
  },
  Repairs: {
    quoteFactors: ["Fault type and product identification", "Parts availability and compatibility", "Access, removal and reinstallation", "Whether repair or replacement is the practical scope"],
    inclusions: ["Review of fault photos and product details", "Discussion of likely repair or replacement pathways", "Confirmation of inspection or parts information required", "Written scope before approved work proceeds"],
    boundaries: ["The current page image is illustrative, not a completed repair record", "Parts cannot be promised for unidentified or discontinued systems", "No repair outcome is guaranteed from photos alone"],
    evidenceTitle: "A useful repair enquiry starts with fault evidence",
    evidenceIntro: "No repair case is being claimed from the illustrative page image. Clear photos of the full product, failed component, mounting surface and any label are used to assess whether a repair pathway can be discussed.",
    evidenceImages: [],
  },
};

export const getServiceDepth = (detail: ServiceDetail): ServiceDepth => {
  const decision = DETAIL_DECISIONS[detail.slug];
  if (!decision) throw new Error(`Missing service-depth content for ${detail.slug}`);
  return { ...decision, ...CATEGORY_GUIDANCE[detail.category] };
};

export const getServiceDetail = (slug: string) => SERVICE_DETAILS.find((item) => item.slug === slug);
export const getRelatedServiceDetails = (detail: ServiceDetail) => SERVICE_DETAILS.filter((item) => item.category === detail.category && item.slug !== detail.slug);
