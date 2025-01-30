const { readOcfPackage, generateSchedule, vestingStatusCheck, isoNsoCalculator, ocfValidator, ocfSnapshot } = require("ocf-tools");



const testOCFPackageReader = (ocfPackageFolderDir) => {
  const ocfPackage = readOcfPackage(ocfPackageFolderDir);
  console.log(ocfPackage);
};

const testVestingScheduleGenerator = (ocfPackageFolderDir, equityCompensationIssuanceSecurityId) => {
  const schedule = generateSchedule(ocfPackageFolderDir, equityCompensationIssuanceSecurityId);
  console.table(schedule);
};

const testVestingStatusCheck = (ocfPackageFolderDir,equityCompensationIssuanceSecurityId, vestingStatusDate) => {
  const status = vestingStatusCheck(ocfPackageFolderDir, equityCompensationIssuanceSecurityId, vestingStatusDate);
  console.table([status]);
};

const testIsoNsoCalculator = (ocfPackageFolderDir, isoCheckStakeholder, isoCapacity) => {
  const isoNso = isoNsoCalculator(ocfPackageFolderDir, isoCheckStakeholder, isoCapacity);
  isoNso.forEach((grantIsoNso) => {
    console.table(grantIsoNso);
  });
};

const testOcfValidator = (ocfPackageFolderDir) => {
  const ocfValidation = ocfValidator(ocfPackageFolderDir);
  console.log(JSON.stringify(ocfValidation.report, null, 2));
  console.log('\n\n\n');
  console.log(ocfValidation.result);
};

const testOcfSnapshot = (ocfPackageFolderDir, ocfSnapshotDate) => {
  const snapshot = ocfSnapshot(ocfPackageFolderDir, ocfSnapshotDate);
  console.log(JSON.stringify(snapshot, null, 2));
};


const testType = "reader";
const ocfPackageFolderDir = "./datasets/acme_holdings_limited";
const equityCompensationIssuanceSecurityId = "equity_compensation_issuance_01";
const vestingStatusDate = "2021-01-15";
const isoCheckStakeholder = "emilyEmployee";
const isoCapacity = 100000;
const ocfSnapshotDate = "2023-01-20";

// 1. OCF READER: Read a directory and generate a JSON object of the OCF package
if (testType == "reader") {testOCFPackageReader(ocfPackageFolderDir)};

// 2. VESTING SCHEDULE GENERATOR: Generate the schedule for an equity compensation issuance
if (testType == "schedule") {testVestingScheduleGenerator(ocfPackageFolderDir, equityCompensationIssuanceSecurityId)};

// 3. VESTING STATUS CHECK: Check the vesting status of an equity compensation issuance at a certain date.
if (testType == "statusCheck") {testVestingStatusCheck(ocfPackageFolderDir,equityCompensationIssuanceSecurityId, vestingStatusDate)};

// 4. ISO/NSO CALCULUATOR: Calculate the ISO and NSO status of options across multiple equity compensation issuances for a stakeholder
if (testType == "iso_nso") {testIsoNsoCalculator(ocfPackageFolderDir, isoCheckStakeholder, isoCapacity)};

// 5. OCF VALIDATOR: Test is a OCF package is structuarally and logically valid
if (testType == "validator") {testOcfValidator(ocfPackageFolderDir);}

// 6. OCF SNAPSHOT CALCULATOR: Produce a snapshot of a issuer's cap table at a certain date
if (testType == "snapshot") {testOcfSnapshot(ocfPackageFolderDir, ocfSnapshotDate);}
