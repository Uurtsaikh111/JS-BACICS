let loan = {
  salary: 2000000,
  socialInsurance: 200000,
  passport: false,
  identityCard: true,
  person: true,
  credential: false,
  dept: 200000,
};
if (
  loan.salary >= 2000000 &&
  loan.socialInsurance > 0 &&
  (loan.passport || loan.identityCard) &&
  (loan.person || loan.credential) &&
  loan.dept < 1000000
) {
  console.log("I GIFT U LOAN");
} else console.log("I DO NOT GIFT U LOAN");
