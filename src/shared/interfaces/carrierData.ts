export interface MonitoredCarriersResponse {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  succeeded: boolean;
  message: string;
  data: Carrier[];
}

export interface Carrier {
  docketNumber: string;
  dotNumber: DotNumber;
  carrierType: string;
  isMonitored: boolean;
  isBlocked: boolean;
  Identity: Identity;
  Authority: Authority;
  FMCSAInsurance: Fmcsainsurance;
  CertData: CertData;
  Safety: Safety;
  Inspection: Inspection;
  Crash: Crash;
  Review: Review;
  Operation: Operation;
  Cargo: Cargo;
  Drivers: Drivers;
  Equipment: Equipment;
  Other: Other;
  RiskAssessment: RiskAssessment;
  RiskAssessmentDetails: RiskAssessmentDetails;
  CarrierRatings: CarrierRatings;
  LatestInvitation: LatestInvitation;
}

export interface DotNumber {
  status: string;
  Value: string;
}

export interface Identity {
  legalName: string;
  dbaName: string;
  businessStreet: string;
  businessCity: string;
  businessState: string;
  businessZipCode: string;
  businessColonia: string;
  businessCountry: string;
  businessPhone: string;
  businessFax: string;
  mailingStreet: string;
  mailingCity: string;
  mailingState: string;
  mailingZipCode: string;
  mailingColonia: string;
  mailingCountry: string;
  mailingPhone: string;
  mailingFax: string;
  undeliverableMail: string;
  companyRep1: string;
  companyRep2: string;
  cellPhone: string;
  emailAddress: string;
  dunBradstreetNum: string;
  organization: string;
}

export interface Authority {
  authGrantDate: string;
  commonAuthority: string;
  commonAuthorityPending: string;
  commonAuthorityRevocation: string;
  contractAuthority: string;
  contractAuthorityPending: string;
  contractAuthorityRevocation: string;
  brokerAuthority: string;
  brokerAuthorityPending: string;
  brokerAuthorityRevocation: string;
  freight: string;
  passenger: string;
  householdGoods: string;
  private: string;
  enterprise: string;
}

export interface Fmcsainsurance {
  bipdRequired: string;
  bipdOnFile: string;
  cargoRequired: string;
  cargoOnFile: string;
  bondSuretyRequired: string;
  bondSuretyOnFile: string;
  PolicyList: PolicyList[];
}

export interface PolicyList {
  companyName: string;
  attnToName: string;
  address: string;
  city: string;
  stateCode: string;
  postalCode: string;
  countryCode: string;
  phone: string;
  fax: string;
  insuranceType: string;
  policyNumber: string;
  postedDate: string;
  effectiveDate: string;
  cancelationDate: string;
  coverageFrom: string;
  coverageTo: string;
  amBestRating: string;
}

export interface CertData {
  status: string;
  Certificate: Certificate[];
}

export interface Certificate {
  certificateID: string;
  producerName: string;
  producerAddress: string;
  producerCity: string;
  producerState: string;
  producerZip: string;
  producerPhone: string;
  producerFax: string;
  producerEmail: string;
  paidFor: string;
  BlobName: string;
  Coverage: Coverage[];
}

export interface Coverage {
  insurerName: string;
  insurerAMBestRating: string;
  type: string;
  policyNumber: string;
  expirationDate: string;
  coverageLimit: string;
  deductable: string;
  referBreakdown: string;
  referBreakDeduct: string;
}

export interface Safety {
  rating: string;
  ratingDate: string;
  unsafeDrvPCT: string;
  unsafeDrvOT: string;
  unsafeDrvSV: string;
  unsafeDrvAlert: string;
  unsafeDrvTrend: string;
  unsafeDrvCNT: number;
  hosPCT: string;
  hosOT: string;
  hosSV: string;
  hosAlert: string;
  hosTrend: string;
  hosCNT: number;
  drvFitPCT: string;
  drvFitOT: string;
  drvFitSV: string;
  drvFitAlert: string;
  drvFitTrend: string;
  drvFitCNT: number;
  controlSubPCT: string;
  controlSubOT: string;
  controlSubSV: string;
  controlSubAlert: string;
  controlSubTrend: string;
  controlSubCNT: number;
  vehMaintPCT: string;
  vehMaintOT: string;
  vehMaintSV: string;
  vehMaintAlert: string;
  vehMaintTrend: string;
  vehMaintCNT: number;
  hazMatPCT: string;
  hazMatOT: string;
  hazMatSV: string;
  hazMatAlert: string;
  hazMatTrend: string;
  hazMatCNT: number;
}

export interface Inspection {
  inspectVehUS: string;
  inspectVehOOSUS: string;
  inspectVehOOSPctUS: string;
  inspectDrvUS: string;
  inspectDrvOOSUS: string;
  inspectDrvOOSPctUS: string;
  inspectHazUS: string;
  inspectHazOOSUS: string;
  inspectHazOOSPctUS: string;
  inspectIEPUS: string;
  inspectIEPOOSUS: string;
  inspectIEPOOSPctUS: string;
  inspectTotalIEPUS: string;
  inspectTotalUS: string;
  inspectVehCAN: string;
  inspectVehOOSCAN: string;
  inspectVehOOSPctCAN: string;
  inspectDrvCAN: string;
  inspectDrvOOSCAN: string;
  inspectDrvOOSPctCAN: string;
  inspectTotalCAN: string;
}

export interface Crash {
  crashFatalUS: string;
  crashInjuryUS: string;
  crashTowUS: string;
  crashTotalUS: string;
  crashFatalCAN: string;
  crashInjuryCAN: string;
  crashTowCAN: string;
  crashTotalCAN: string;
}

export interface Review {
  reviewType: string;
  reviewDate: string;
  reviewDocNum: string;
  reviewMiles: string;
  mcs150Date: string;
  mcs150MileYear: string;
  mcs150Miles: string;
  accidentRate: string;
  accidentRatePrevent: string;
}

export interface Operation {
  dotAddDate: string;
  carrierOperation: string;
  shipperOperation: string;
  mxOperationType: string;
  mxRFCNumber: string;
  outOfService: string;
  outOfServiceDate: string;
  outOfServiceReason: string;
  entityCarrier: string;
  entityShipper: string;
  entityBroker: string;
  entityFreightFowarder: string;
  entityCargoTank: string;
  classAuthForHire: string;
  classMigrant: string;
  classIndianNation: string;
  classExemptForHire: string;
  classUSMail: string;
  classPrivateProperty: string;
  classFederalGovernment: string;
  classPrivPassBusiness: string;
  classStateGovernment: string;
  classPrivPassNonBusiness: string;
  classLocalGovernment: string;
  classOther: string;
  operatingStatus: string;
}

export interface Cargo {
  hazmatIndicator: string;
  cargoGenFreight: string;
  cargoHousehold: string;
  cargoMetal: string;
  cargoMotorVeh: string;
  cargoDriveTow: string;
  cargoLogPole: string;
  cargoBldgMaterial: string;
  cargoMobileHome: string;
  cargoMachLarge: string;
  cargoProduce: string;
  cargoLiqGas: string;
  cargoIntermodal: string;
  cargoPassengers: string;
  cargoOilfield: string;
  cargoLivestock: string;
  cargoGrainfeed: string;
  cargoCoalcoke: string;
  cargoMeat: string;
  cargoGarbage: string;
  cargoUSMail: string;
  cargoChemicals: string;
  cargoDryBulk: string;
  cargoRefrigerated: string;
  cargoBeverages: string;
  cargoPaperProd: string;
  cargoUtilities: string;
  cargoFarmSupplies: string;
  cargoConstruction: string;
  cargoWaterwell: string;
  cargoOther: string;
  cargoOtherDesc: string;
}

export interface Drivers {
  driversTotal: string;
  driversAvgLeased: string;
  driversCDL: string;
  driversInter: string;
  driversInterLT100: string;
  driversInterGT100: string;
  driversIntra: string;
  driversIntraLT100: string;
  driversIntraGT100: string;
}

export interface Equipment {
  trucksTotal: string;
  totalPower: string;
  fleetsize: string;
  trucksOwned: string;
  trucksTerm: string;
  trucksTrip: string;
  trailersOwned: string;
  trailersTerm: string;
  trailersTrip: string;
  tractorsOwned: string;
  tractorsTerm: string;
  tractorsTrip: string;
}

export interface Other {
  carbTru: string;
  smartway: string;
  watchdogReports: string;
}

export interface RiskAssessment {
  Overall: string;
  Authority: string;
  Insurance: string;
  Safety: string;
  Operation: string;
  Other: string;
}

export interface RiskAssessmentDetails {
  IsIntrastateCarrier: boolean;
  TotalPoints: number;
  OverallRating: string;
  Authority: Authority2;
  Insurance: Insurance;
  Safety: Safety2;
  Operation: Operation2;
  Other: Other2;
}

export interface Authority2 {
  TotalPoints: number;
  OverallRating: string;
  Infractions: Infraction[];
}

export interface Infraction {
  Points: number;
  RiskLevel: string;
  RuleText: string;
  RuleOutput: string;
}

export interface Insurance {
  TotalPoints: number;
  OverallRating: string;
  Infractions: Infraction2[];
}

export interface Infraction2 {
  Points: number;
  RiskLevel: string;
  RuleText: string;
  RuleOutput: string;
}

export interface Safety2 {
  TotalPoints: number;
  OverallRating: string;
  Infractions: Infraction3[];
}

export interface Infraction3 {
  Points: number;
  RiskLevel: string;
  RuleText: string;
  RuleOutput: string;
}

export interface Operation2 {
  TotalPoints: number;
  OverallRating: string;
  Infractions: Infraction4[];
}

export interface Infraction4 {
  Points: number;
  RiskLevel: string;
  RuleText: string;
  RuleOutput: string;
}

export interface Other2 {
  TotalPoints: number;
  OverallRating: string;
  Infractions: Infraction5[];
}

export interface Infraction5 {
  Points: number;
  RiskLevel: string;
  RuleText: string;
  RuleOutput: string;
}

export interface CarrierRatings {
  myRating: number;
  totalRatings: number;
  lowRatings: number;
  avgRating: number;
}

export interface LatestInvitation {
  InvitedByUserName: string;
  InvitedByEmail: string;
  InvitedByFirstName: string;
  InvitedByLastName: string;
  InvitationSentDate: string;
  InvitationRecipient: string;
}

export interface CarrierDataResponse {
  DOTNumber: number;
  LegalName: string;
  DBAName: string;
  Address1: string;
  Address2: string;
  City: string;
  Zipcode: string;
  State: string;
  Country: string;
  CellPhone: string;
  Phone: string;
  Fax: string;
  FreePhone: string;
  EmergencyPhone: string;
  Email: string;
  FraudIdentityTheftStatus: string;
  MCNumber: string;
  SCAC: string;
  MailingAddress1: string;
  MailingAddress2: string;
  MailingCity: string;
  MailingState: string;
  MailingZipcode: string;
  MailingCountry: string;
  AfterHrsWkDaySupportName: string;
  AfterHrsWkDaySupportPhone: string;
  AfterHrsWkDaySupportFax: string;
  AfterHrsWkDaySupportFrom: string;
  AfterHrsWkDaySupportTo: string;
  AfterHrsWkEndSupportName: string;
  AfterHrsWkEndSupportPhone: string;
  AfterHrsWkEndSupportFax: string;
  AfterHrsWkEndSupportFrom: string;
  AfterHrsWkEndSupportTo: string;
  Website: string;
  OperationManagerName: string;
  OnlineAccessToAvailableLoads: boolean;
  AvailableLoadsEmail: string;
  DriverLogsSafeyDeptManagerName: string;
  DriverLogsSafeyDeptManagerPhone: string;
  Dispatchers: string;
  ClaimsContactName: string;
  ClaimsContactPhone: string;
  ClaimsContactEmail: string;
  DispatchServiceUsed: boolean;
  DispatchServiceName: string;
  DispatchServicePhone: string;
  BrokerOutExtraFreight: boolean;
  References1: string;
  References2: string;
  References3: string;
  DriversTrackedBy: string;
  AccessOnlineGPSTracking: boolean;
  DriversTrackedByOtherMethod: string;
  CreatedDateTime: string;
  ModifiedDateTime: string;
  CarrierCustomerAgreements: CarrierCustomerAgreement[];
  CarrierCustomerPacketStatuses: CarrierCustomerPacketStatuse[];
  CarrierCargoHauled: CarrierCargoHauled;
  CarrierCompanyClassification: CarrierCompanyClassification;
  CarrierDrivers: CarrierDriver[];
  CarrierDispatchers: CarrierDispatcher[];
  CarrierLane: CarrierLane;
  CarrierOperationalDetail: CarrierOperationalDetail;
  CarrierPaymentInfo: CarrierPaymentInfo;
  CarrierRemit: CarrierRemit;
  FactoringRemit: FactoringRemit;
  CarrierBank: CarrierBank;
  CarrierPaymentTerms: CarrierPaymentTerm[];
  CarrierPaymentTypes: CarrierPaymentType[];
  CarrierPayerType: CarrierPayerType;
  CarrierTruckClass: CarrierTruckClass;
  CarrierTruckType: CarrierTruckType;
  CarrierW9Forms: CarrierW9Form[];
  CarrierCertification: CarrierCertification;
  AssureAdvantage: AssureAdvantage[];
  CarrierMode: CarrierMode;
  CarrierELDProvider: CarrierEldprovider;
  OwnerContactName: string;
  OwnerContactPhone: string;
  OwnerContactEmail: string;
  CarrierTINMatchings: CarrierTinmatching[];
  Message: string;
}

export interface CarrierCustomerAgreement {
  SignatureDate: string;
  SignaturePerson: string;
  SignaturePersonTitle: string;
  SignaturePersonUserName: string;
  SignaturePersonEmail: string;
  SignaturePersonPhoneNumber: string;
  CustomerAgreement: CustomerAgreement;
  CarrierCustomerAgreementImages: CarrierCustomerAgreementImage[];
  IsActive: boolean;
}

export interface CustomerAgreement {
  AgreementName: string;
  CreatedDate: string;
  CreatedBy: string;
  BlobName: string;
  Customer: Customer;
}

export interface Customer {
  CustomerID: number;
  Title: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  CompanyName: string;
  TypeCompany: string;
  CellPhone: string;
  Phone: string;
  Fax: string;
  Address1: string;
  Address2: string;
  Apartment: string;
  City: string;
  State: string;
  Zipcode: string;
  Country: string;
  CustomerKey: string;
  PacketCompletionNotificationType: number;
  PacketCompletionNotificationEmail: string;
}

export interface CarrierCustomerAgreementImage {
  BlobName: string;
  CreatedDate: string;
}

export interface CarrierCustomerPacketStatuse {
  Customer: Customer2;
  CarrierPacketStatus: string;
  CustomerID: number;
}

export interface Customer2 {
  CustomerID: number;
  Title: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  CompanyName: string;
  TypeCompany: string;
  CellPhone: string;
  Phone: string;
  Fax: string;
  Address1: string;
  Address2: string;
  Apartment: string;
  City: string;
  State: string;
  Zipcode: string;
  Country: string;
  CustomerKey: string;
  PacketCompletionNotificationType: number;
  PacketCompletionNotificationEmail: string;
}

export interface CarrierCargoHauled {
  GeneralFreight: boolean;
  LiquidsGas: boolean;
  Chemicals: boolean;
  HouseholdGoods: boolean;
  IntermodalContainers: boolean;
  CommoditiesDryBulk: boolean;
  MetalSheetsCoilsRolls: boolean;
  Passengers: boolean;
  RefrigeratedFood: boolean;
  MotorVehicles: boolean;
  OilfieldEquipment: boolean;
  Beverages: boolean;
  DrivewayTowaway: boolean;
  LivestockContainers: boolean;
  PaperProducts: boolean;
  LogsPolesBeamsLumber: boolean;
  GrainFeedHay: boolean;
  Utility: boolean;
  BuildingMaterials: boolean;
  CoalCoke: boolean;
  FarmSupplies: boolean;
  MobileHomes: boolean;
  Meat: boolean;
  Construction: boolean;
  MachineryLargeObjects: boolean;
  GarbageRefuseTrash: boolean;
  WaterWell: boolean;
  FreshProduce: boolean;
  USMail: boolean;
  Other: string;
}

export interface CarrierCompanyClassification {
  AuthForHire: boolean;
  Migrant: boolean;
  IndianNation: boolean;
  ExemptForHire: boolean;
  USMail: boolean;
  PrivateProperty: boolean;
  FederalGovernment: boolean;
  PrivPassBusiness: boolean;
  StateGovernment: boolean;
  PrivPassNonBusiness: boolean;
  LocalGovernment: boolean;
  WOSB: boolean;
  VOSB: boolean;
  MBE: boolean;
  AsianPacificAmerican: boolean;
  SubcontinentAmerican: boolean;
  NOB: boolean;
  HispanicAmerican: boolean;
  AfricanAmerican: boolean;
  WBE: boolean;
  DBE: boolean;
  SBA8a: boolean;
  EDWOSB: boolean;
  SDVOSB: boolean;
  HUBZone: boolean;
  LGBTQIA: boolean;
  Other: string;
}

export interface CarrierDriver {
  DriverName: string;
  CellPhone: string;
  ComCheck: boolean;
  FuelAdvance: boolean;
}

export interface CarrierDispatcher {
  DispatcherName: string;
  PhoneNumber: string;
  Email: string;
}

export interface CarrierLane {
  UnitedStates: boolean;
  Mexico: boolean;
  Canada: boolean;
  NortheastRegion: boolean;
  MidwestRegion: boolean;
  SouthRegion: boolean;
  WestRegion: boolean;
  Alabama: boolean;
  Alaska: boolean;
  Arizona: boolean;
  Arkansas: boolean;
  California: boolean;
  Colorado: boolean;
  Delaware: boolean;
  Florida: boolean;
  Georgia: boolean;
  Hawaii: boolean;
  Idaho: boolean;
  Illinois: boolean;
  Indiana: boolean;
  Iowa: boolean;
  Kansas: boolean;
  Kentucky: boolean;
  Louisiana: boolean;
  Maine: boolean;
  Maryland: boolean;
  Massachusetts: boolean;
  Michigan: boolean;
  Minnesota: boolean;
  Mississippi: boolean;
  Missouri: boolean;
  Montana: boolean;
  Nebraska: boolean;
  Nevada: boolean;
  NewHampshire: boolean;
  NewJersey: boolean;
  NewMexico: boolean;
  NewYork: boolean;
  NorthCarolina: boolean;
  NorthDakota: boolean;
  Ohio: boolean;
  Oklahoma: boolean;
  Oregon: boolean;
  Pennsylvania: boolean;
  RhodeIsland: boolean;
  SouthCarolina: boolean;
  SouthDakota: boolean;
  Tennessee: boolean;
  Utah: boolean;
  Vermont: boolean;
  Virginia: boolean;
  Washington: boolean;
  WashingtonDC: boolean;
  WestVirginia: boolean;
  Wisconsin: boolean;
  Wyoming: boolean;
  Connecticut: boolean;
  Texas: boolean;
  Alberta: boolean;
  BritishColumbia: boolean;
  Manitoba: boolean;
  NewBrunswick: boolean;
  NewfoundlandAndLabrador: boolean;
  NorthwestTerritories: boolean;
  NovaScotia: boolean;
  Nunavut: boolean;
  Ontario: boolean;
  PrinceEdwardIsland: boolean;
  Quebec: boolean;
  Saskatchewan: boolean;
  YukonTerritory: boolean;
}

export interface CarrierOperationalDetail {
  FleetSize: number;
  TotalPowerUnits: number;
  NumberOfVehicles: number;
  ReeferEquipment: boolean;
  VanEquipment: boolean;
  FlatbedStepDeckEquipment: boolean;
  OwnedTractors: number;
  OwnedTrucks: number;
  OwnedTrailers: number;
  TermLeasedTractors: number;
  TermLeasedTrucks: number;
  TermLeasedTrailers: number;
  TripLeasedTractors: number;
  TripLeasedTrucks: number;
  TripLeasedTrailers: number;
  InterstateAndIntrastateDrivers: number;
  CDLEmployedDrivers: number;
  MonthlyAverageLeasedDrivers: number;
  InterstateDriversTotal: number;
  InterstateDriversGT100Miles: number;
  InterstateDriversLT100Miles: number;
  IntrastateDriversTotal: number;
  IntrastateDriversGT100Miles: number;
  IntrastateDriversLT100Miles: number;
  PowerOnly: boolean;
  SatelliteEquipment: boolean;
  TeamDrivers: boolean;
  DropTrailer: boolean;
  ELDCompliant: boolean;
  ELDCompliantBy: string;
  ELDIdentifier: string;
  NumberOfTractors: number;
  NumberOfVans: number;
  NumberOfReefers: number;
  NumberOfFlats: number;
  NumberOfStepDecks: number;
  NumberOfTanks: number;
}

export interface CarrierPaymentInfo {
  BankRoutingNumber: string;
  BankAccountNumber: string;
  BankAccountName: string;
  BankName: string;
  BankAddress: string;
  BankPhone: string;
  BankFax: string;
  FactoringCompanyName: string;
  RemitAddress1: string;
  RemitAddress2: string;
  RemitCity: string;
  RemitZipCode: string;
  BankAccountType: string;
  RemitState: string;
  RemitCountry: string;
  RemitEmail: string;
  Require1099: boolean;
  EpayManagerID: number;
  RemitCurrency: string;
  PayAdvanceOptionID: number;
  PayAdvanceOptionType: string;
}

export interface CarrierRemit {
  CarrierRemitEmail: string;
  CarrierRemitAddress1: string;
  CarrierRemitAddress2: string;
  CarrierRemitCity: string;
  CarrierRemitCountry: string;
  CarrierRemitStateProvince: string;
  CarrierRemitZipCode: string;
}

export interface FactoringRemit {
  FactoringCompanyID: number;
  FactoringCompanyName: string;
  FactoringRemitEmail: string;
  FactoringRemitAddress: string;
  FactoringRemitAddress2: string;
  FactoringRemitCity: string;
  FactoringRemitCountry: string;
  FactoringRemitStateProvince: string;
  FactoringRemitZipcode: string;
  FactoringPhone: string;
  BankRoutingNumber: string;
  BankAccountNumber: string;
}

export interface CarrierBank {
  CarrierBankRoutingNumber: string;
  CarrierBankAccountNumber: string;
  CarrierBankAccountName: string;
  CarrierBankName: string;
  CarrierBankAddress: string;
  CarrierBankPhone: string;
  CarrierBankFax: string;
  CarrierBankAccountType: string;
}

export interface CarrierPaymentTerm {
  PaymentTerm: PaymentTerm;
}

export interface PaymentTerm {
  PaymentTermID: number;
  Days: number;
  Term: string;
  QuickPay: boolean;
  PaymentFeeType: string;
  PaymentFeeAmount: number;
  CustomerID: number;
}

export interface CarrierPaymentType {
  PaymentType: PaymentType;
}

export interface PaymentType {
  PaymentTypeID: number;
  Type: string;
  CustomerID: number;
  PaymentType: PaymentType2;
}

export interface PaymentType2 {
  Name: string;
}

export interface CarrierPayerType {
  PayerTypeID: number;
  Name: string;
}

export interface CarrierTruckClass {
  Conestoga: boolean;
  Containers: boolean;
  DecksSpecialized: boolean;
  DecksStandard: boolean;
  DryBulk: boolean;
  Flatbeds: boolean;
  HazardousMaterials: boolean;
  Reefers: boolean;
  Tankers: boolean;
  VansSpecialized: boolean;
  VansStandard: boolean;
  Other: string;
}

export interface CarrierTruckType {
  AutoCarrier: boolean;
  BTrain: boolean;
  Conestoga: boolean;
  Container: boolean;
  ContainerInsulated: boolean;
  ContainerRefrigerated: boolean;
  Conveyor: boolean;
  DoubleDrop: boolean;
  DropDeckLandoll: boolean;
  DumpTrailer: boolean;
  Flatbed: boolean;
  FlatbedAirRide: boolean;
  FlatbedConestoga: boolean;
  FlatbedDouble: boolean;
  FlatbedHazMat: boolean;
  FlatbedHotshot: boolean;
  FlatbedMaxi: boolean;
  FlatbedOrStepDeck: boolean;
  FlatbedOverdimension: boolean;
  FlatbedWithchains: boolean;
  FlatbedWithSides: boolean;
  FlatbedWithTarps: boolean;
  FlatbedWithTeam: boolean;
  FlatbedVanReefer: boolean;
  HopperBottom: boolean;
  InsulatedVanOrReefer: boolean;
  Lowboy: boolean;
  LowboyOrRemGooseneck: boolean;
  LowboyOverdimension: boolean;
  MovingVan: boolean;
  Pneumatic: boolean;
  PowerOnly: boolean;
  Reefer: boolean;
  ReeferAirRide: boolean;
  ReeferDouble: boolean;
  ReeferHazMat: boolean;
  ReeferIntermodal: boolean;
  ReeferLogistics: boolean;
  ReeferOrVentedVan: boolean;
  ReeferPalletExchange: boolean;
  ReeferWithTeam: boolean;
  RemovableGooseneck: boolean;
  StepDeck: boolean;
  StepDeckOrRemGooseneck: boolean;
  StepdeckConestoga: boolean;
  StraightBoxTruck: boolean;
  StretchTrailer: boolean;
  TankerAluminum: boolean;
  TankerIntermodal: boolean;
  TankerSteel: boolean;
  TruckAndTrailer: boolean;
  Van: boolean;
  VanAirRide: boolean;
  VanBlanketWrap: boolean;
  VanConestoga: boolean;
  VanDouble: boolean;
  VanHazMat: boolean;
  VanHotshot: boolean;
  VanInsulated: boolean;
  VanIntermodal: boolean;
  VanLiftGate: boolean;
  VanLogistics: boolean;
  VanOpenTop: boolean;
  VanOrFlatbed: boolean;
  VanOrFlatbedwTarps: boolean;
  VanOrReefer: boolean;
  VanPalletExchange: boolean;
  VanRollerBed: boolean;
  VanTriple: boolean;
  VanVented: boolean;
  VanWithCurtains: boolean;
  VanWithTeam: boolean;
  OneToTwoCarHauler: boolean;
  ThreeCarHauler: boolean;
  FourToFiveCarHauler: boolean;
  SixToSevenCarHauler: boolean;
  EightToTenCarHauler: boolean;
  Chassis: boolean;
  PintleHitch: boolean;
  VanSprinter: boolean;
  Toter: boolean;
}

export interface CarrierW9Form {
  FullName: string;
  BusinessName: string;
  IndividualOrSingleMemberLLC: boolean;
  CCorporation: boolean;
  SCorporation: boolean;
  Partnership: boolean;
  RequesterNameAddress: string;
  TrustOrEstate: boolean;
  LimitedLiabilityCompany: boolean;
  TaxClassification: string;
  Other: boolean;
  OtherDetail: string;
  ExemptPayeeCode: string;
  ExemptionFATCACode: string;
  Address: string;
  CityStateZipCode: string;
  ListAccountNumber: string;
  SSN: string;
  EIN: string;
  SignatureDate: string;
  SignaturePerson: string;
  IsActive: boolean;
  City: string;
  State: string;
  ZipCode: string;
  CarrierW9FormImages: CarrierW9FormImage[];
}

export interface CarrierW9FormImage {
  BlobName: string;
  CreatedDate: string;
  FileName: string;
  CreatedBy: string;
}

export interface CarrierCertification {
  Hazmat: boolean;
  HazmatNumber: string;
  SmartWay: boolean;
  CARB: boolean;
  TWIC: boolean;
  CTPATCertified: boolean;
  CTPATSVINumber: string;
  TankerEndorsed: boolean;
  TankerEndorsedNumOfDrivers: number;
  CBP: boolean;
  CBSA: boolean;
  ANAM: boolean;
  ACE: boolean;
  ACI: boolean;
  CSA: boolean;
  FAST: boolean;
  PIP: boolean;
}

export interface AssureAdvantage {
  CarrierDetails: CarrierDetails;
  ResponseDO: ResponseDo;
}

export interface CarrierDetails {
  docketNumber: string;
  dotNumber: DotNumber;
  carrierType: string;
  isMonitored: boolean;
  isBlocked: boolean;
  Identity: Identity;
  Authority: Authority;
  FMCSAInsurance: Fmcsainsurance;
  CertData: CertData;
  Safety: Safety;
  Inspection: Inspection;
  Crash: Crash;
  Review: Review;
  Operation: Operation;
  Cargo: Cargo;
  Drivers: Drivers;
  Equipment: Equipment;
  Other: Other;
  RiskAssessment: RiskAssessment;
  RiskAssessmentDetails: RiskAssessmentDetails;
  CarrierRatings: CarrierRatings;
  LatestInvitation: LatestInvitation;
}

export interface DotNumber {
  status: string;
  Value: string;
}

export interface Identity {
  legalName: string;
  dbaName: string;
  businessStreet: string;
  businessCity: string;
  businessState: string;
  businessZipCode: string;
  businessColonia: string;
  businessCountry: string;
  businessPhone: string;
  businessFax: string;
  mailingStreet: string;
  mailingCity: string;
  mailingState: string;
  mailingZipCode: string;
  mailingColonia: string;
  mailingCountry: string;
  mailingPhone: string;
  mailingFax: string;
  undeliverableMail: string;
  companyRep1: string;
  companyRep2: string;
  cellPhone: string;
  emailAddress: string;
  dunBradstreetNum: string;
  organization: string;
}

export interface Authority {
  authGrantDate: string;
  commonAuthority: string;
  commonAuthorityPending: string;
  commonAuthorityRevocation: string;
  contractAuthority: string;
  contractAuthorityPending: string;
  contractAuthorityRevocation: string;
  brokerAuthority: string;
  brokerAuthorityPending: string;
  brokerAuthorityRevocation: string;
  freight: string;
  passenger: string;
  householdGoods: string;
  private: string;
  enterprise: string;
}

export interface Fmcsainsurance {
  bipdRequired: string;
  bipdOnFile: string;
  cargoRequired: string;
  cargoOnFile: string;
  bondSuretyRequired: string;
  bondSuretyOnFile: string;
  PolicyList: PolicyList[];
}

export interface PolicyList {
  companyName: string;
  attnToName: string;
  address: string;
  city: string;
  stateCode: string;
  postalCode: string;
  countryCode: string;
  phone: string;
  fax: string;
  insuranceType: string;
  policyNumber: string;
  postedDate: string;
  effectiveDate: string;
  cancelationDate: string;
  coverageFrom: string;
  coverageTo: string;
  amBestRating: string;
}

export interface CertData {
  status: string;
  Certificate: Certificate[];
}

export interface Certificate {
  certificateID: string;
  producerName: string;
  producerAddress: string;
  producerCity: string;
  producerState: string;
  producerZip: string;
  producerPhone: string;
  producerFax: string;
  producerEmail: string;
  paidFor: string;
  BlobName: string;
  Coverage: Coverage[];
}

export interface Coverage {
  insurerName: string;
  insurerAMBestRating: string;
  type: string;
  policyNumber: string;
  expirationDate: string;
  coverageLimit: string;
  deductable: string;
  referBreakdown: string;
  referBreakDeduct: string;
}

export interface Safety {
  rating: string;
  ratingDate: string;
  unsafeDrvPCT: string;
  unsafeDrvOT: string;
  unsafeDrvSV: string;
  unsafeDrvAlert: string;
  unsafeDrvTrend: string;
  unsafeDrvCNT: number;
  hosPCT: string;
  hosOT: string;
  hosSV: string;
  hosAlert: string;
  hosTrend: string;
  hosCNT: number;
  drvFitPCT: string;
  drvFitOT: string;
  drvFitSV: string;
  drvFitAlert: string;
  drvFitTrend: string;
  drvFitCNT: number;
  controlSubPCT: string;
  controlSubOT: string;
  controlSubSV: string;
  controlSubAlert: string;
  controlSubTrend: string;
  controlSubCNT: number;
  vehMaintPCT: string;
  vehMaintOT: string;
  vehMaintSV: string;
  vehMaintAlert: string;
  vehMaintTrend: string;
  vehMaintCNT: number;
  hazMatPCT: string;
  hazMatOT: string;
  hazMatSV: string;
  hazMatAlert: string;
  hazMatTrend: string;
  hazMatCNT: number;
}

export interface Inspection {
  inspectVehUS: string;
  inspectVehOOSUS: string;
  inspectVehOOSPctUS: string;
  inspectDrvUS: string;
  inspectDrvOOSUS: string;
  inspectDrvOOSPctUS: string;
  inspectHazUS: string;
  inspectHazOOSUS: string;
  inspectHazOOSPctUS: string;
  inspectIEPUS: string;
  inspectIEPOOSUS: string;
  inspectIEPOOSPctUS: string;
  inspectTotalIEPUS: string;
  inspectTotalUS: string;
  inspectVehCAN: string;
  inspectVehOOSCAN: string;
  inspectVehOOSPctCAN: string;
  inspectDrvCAN: string;
  inspectDrvOOSCAN: string;
  inspectDrvOOSPctCAN: string;
  inspectTotalCAN: string;
}

export interface Crash {
  crashFatalUS: string;
  crashInjuryUS: string;
  crashTowUS: string;
  crashTotalUS: string;
  crashFatalCAN: string;
  crashInjuryCAN: string;
  crashTowCAN: string;
  crashTotalCAN: string;
}

export interface Review {
  reviewType: string;
  reviewDate: string;
  reviewDocNum: string;
  reviewMiles: string;
  mcs150Date: string;
  mcs150MileYear: string;
  mcs150Miles: string;
  accidentRate: string;
  accidentRatePrevent: string;
}

export interface Operation {
  dotAddDate: string;
  carrierOperation: string;
  shipperOperation: string;
  mxOperationType: string;
  mxRFCNumber: string;
  outOfService: string;
  outOfServiceDate: string;
  outOfServiceReason: string;
  entityCarrier: string;
  entityShipper: string;
  entityBroker: string;
  entityFreightFowarder: string;
  entityCargoTank: string;
  classAuthForHire: string;
  classMigrant: string;
  classIndianNation: string;
  classExemptForHire: string;
  classUSMail: string;
  classPrivateProperty: string;
  classFederalGovernment: string;
  classPrivPassBusiness: string;
  classStateGovernment: string;
  classPrivPassNonBusiness: string;
  classLocalGovernment: string;
  classOther: string;
  operatingStatus: string;
}

export interface Cargo {
  hazmatIndicator: string;
  cargoGenFreight: string;
  cargoHousehold: string;
  cargoMetal: string;
  cargoMotorVeh: string;
  cargoDriveTow: string;
  cargoLogPole: string;
  cargoBldgMaterial: string;
  cargoMobileHome: string;
  cargoMachLarge: string;
  cargoProduce: string;
  cargoLiqGas: string;
  cargoIntermodal: string;
  cargoPassengers: string;
  cargoOilfield: string;
  cargoLivestock: string;
  cargoGrainfeed: string;
  cargoCoalcoke: string;
  cargoMeat: string;
  cargoGarbage: string;
  cargoUSMail: string;
  cargoChemicals: string;
  cargoDryBulk: string;
  cargoRefrigerated: string;
  cargoBeverages: string;
  cargoPaperProd: string;
  cargoUtilities: string;
  cargoFarmSupplies: string;
  cargoConstruction: string;
  cargoWaterwell: string;
  cargoOther: string;
  cargoOtherDesc: string;
}

export interface Drivers {
  driversTotal: string;
  driversAvgLeased: string;
  driversCDL: string;
  driversInter: string;
  driversInterLT100: string;
  driversInterGT100: string;
  driversIntra: string;
  driversIntraLT100: string;
  driversIntraGT100: string;
}

export interface Equipment {
  trucksTotal: string;
  totalPower: string;
  fleetsize: string;
  trucksOwned: string;
  trucksTerm: string;
  trucksTrip: string;
  trailersOwned: string;
  trailersTerm: string;
  trailersTrip: string;
  tractorsOwned: string;
  tractorsTerm: string;
  tractorsTrip: string;
}

export interface Other {
  carbTru: string;
  smartway: string;
  watchdogReports: string;
}

export interface RiskAssessment {
  Overall: string;
  Authority: string;
  Insurance: string;
  Safety: string;
  Operation: string;
  Other: string;
}

export interface RiskAssessmentDetails {
  IsIntrastateCarrier: boolean;
  TotalPoints: number;
  OverallRating: string;
  Authority: Authority2;
  Insurance: Insurance;
  Safety: Safety2;
  Operation: Operation2;
  Other: Other2;
}

export interface Authority2 {
  TotalPoints: number;
  OverallRating: string;
  Infractions: Infraction[];
}

export interface Infraction {
  Points: number;
  RiskLevel: string;
  RuleText: string;
  RuleOutput: string;
}

export interface Insurance {
  TotalPoints: number;
  OverallRating: string;
  Infractions: Infraction2[];
}

export interface Infraction2 {
  Points: number;
  RiskLevel: string;
  RuleText: string;
  RuleOutput: string;
}

export interface Safety2 {
  TotalPoints: number;
  OverallRating: string;
  Infractions: Infraction3[];
}

export interface Infraction3 {
  Points: number;
  RiskLevel: string;
  RuleText: string;
  RuleOutput: string;
}

export interface Operation2 {
  TotalPoints: number;
  OverallRating: string;
  Infractions: Infraction4[];
}

export interface Infraction4 {
  Points: number;
  RiskLevel: string;
  RuleText: string;
  RuleOutput: string;
}

export interface Other2 {
  TotalPoints: number;
  OverallRating: string;
  Infractions: Infraction5[];
}

export interface Infraction5 {
  Points: number;
  RiskLevel: string;
  RuleText: string;
  RuleOutput: string;
}

export interface CarrierRatings {
  myRating: number;
  totalRatings: number;
  lowRatings: number;
  avgRating: number;
}

export interface LatestInvitation {
  InvitedByUserName: string;
  InvitedByEmail: string;
  InvitedByFirstName: string;
  InvitedByLastName: string;
  InvitationSentDate: string;
  InvitationRecipient: string;
}

export interface ResponseDo {
  status: string;
  action: string;
  code: string;
  displayMsg: string;
  techMsg: string;
}

export interface CarrierMode {
  LessThanTruckLoad: boolean;
  Partial: boolean;
  Truckload: boolean;
  Rail: boolean;
  Intermodal: boolean;
  Air: boolean;
  Expedite: boolean;
  Ocean: boolean;
  Drayage: boolean;
}

export interface CarrierEldprovider {
  ComplianceStatusID: number;
  ComplianceStatus: string;
  ProviderName: string;
  ProviderIdentifier: string;
  ExemptionID: number;
  Exemption: string;
  CompliantBy: string;
}

export interface CarrierTinmatching {
  TINTypeID: number;
  TIN: string;
  TINName: string;
  TINMatchingStatusID: number;
  TINMatchingResultID: number;
  CreatedOnUtc: string;
  SubmittedOnUtc: string;
  ProcessedOnUtc: string;
  ContactEmail: string;
  ContactPhoneNumber: string;
  MatchingResult: string;
  MatchingStatus: string;
}

export interface MonitoredCarriers {
  DOTNumber: number;
  DocketNumber: string;
  IntrastateNumber: string;
  CreatedDate: string;
  CreatedBy: string;
  LastModifiedDate: string;
  LastModifiedBy: string;
}

export interface CarrierChangesApiResponse {
  FromDate: string;
  ToDate: string;
  RequestDateTimeUtc: string;
  InsuranceChangeCount: number;
  FMCSAChangeCount: number;
  RiskAssessmentChangeCount: number;
  CarrierCount: number;
  CarrierList: CarrierList[];
}

export interface CarrierList {
  ChangeDateTime: string;
  ChangeCategories: string[];
  CarrierDetails: CarrierDetails;
  ResponseDO: ResponseDO;
}

export interface ResponseDO {
  status: string;
  action: string;
  code: string;
  displayMsg: string;
  techMsg: string;
}
