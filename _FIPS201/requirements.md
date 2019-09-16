---
layout: default
title: Common Identification, Security, and Privacy Requirements
navOrder: 2
navTitle: Requirements
permalink: /requirements/
---
# 2. Common Identification, Security, and Privacy Requirements

This section addresses the fundamental control and security objectives outlined in [HSPD-12], including
the identity proofing requirements for Federal employees and contractors.

## 2.1 Control Objectives

[HSPD-12] established control objectives for secure and reliable identification of Federal employees and
contractors. These control objectives, provided in paragraph 3 of the directive, are quoted here:

> (3) "Secure and reliable forms of identification" for purposes of this directive means identification that (a)
is issued based on sound criteria for verifying an individual employee's identity; (b) is strongly resistant to
identity fraud, tampering, counterfeiting, and terrorist exploitation; (c) can be rapidly authenticated
electronically; and (d) is issued only by providers whose reliability has been established by an official
accreditation process.


Each agency’s PIV implementation shall meet the four control objectives (a) through (d) listed above
such that—

+ Credentials are issued 1) to individuals whose identity has been verified and 2) after a proper
authority has authorized issuance of the credential.

+ A credential is issued only after National Agency Check with Written Inquiries (NACI) (or equivalent
or higher) or Tier 1 or higher federal background investigation is initiated[^background] and the Federal Bureau of
Investigation (FBI) National Criminal History Check (NCHC) portion of the background
investigation is completed.

+ An individual is issued a credential only after presenting two identity source documents, at least one
of which is a Federal or State government issued picture ID.

+ Fraudulent identity source documents are not accepted as genuine and unaltered.

+ A person suspected or known to the government as being a terrorist is not issued a credential.

+ No substitution occurs in the identity proofing process. More specifically, the individual who appears
for identity proofing, and whose fingerprints are checked against databases, is the person to whom the
credential is issued.

+ No credential is issued unless requested by proper authority.

+ A credential remains serviceable only up to its expiration date. More precisely, a revocation process
exists such that expired or invalidated credentials are swiftly revoked.

+ A single corrupt official in the process may not issue a credential with an incorrect identity or to a
person not entitled to the credential.

+ An issued credential is not duplicated or forged, and is not modified by an unauthorized entity.

[^background]: The initiation of a background investigation is defined as the submission of the investigative request to the Office of Personnel Management (OPM), or other Federal background investigation service provider (if authorized).


## 2.2 Credentialing Requirements

Federal departments and agencies shall use the credentialing guidance issued by the Director of the Office
of Personnel Management (OPM)[^OPM] and OMB[^OMB].

[^OPM]: For example, [SPRINGER MEMO] at [http://www.opm.gov/investigate/resources/final_credentialing_standards.pdf](http://www.opm.gov/investigate/resources/final_credentialing_standards.pdf) and the Federal Investigative Standards 5.

[^OMB]: For example, [OMB0524] at [http://www.whitehouse.gov/sites/default/files/omb/memoranda/fy2005/m05-24.pdf.](http://www.whitehouse.gov/sites/default/files/omb/memoranda/fy2005/m05-24.pdf.)

## 2.3 Biometric Data Collection for Background Investigations

The following biometric data shall be collected from each PIV applicant:

+ A full set of fingerprints. Biometric identification using fingerprints is the primary input to law
enforcement checks. In cases where ten fingerprints are not available, then as many fingers as
possible shall be imaged. In cases where obtaining any fingerprints is impossible, agencies shall seek
OPM guidance for alternative means of performing the law enforcement checks.

This collection is not necessary for applicants who have a completed and favorably adjudicated NACI (or
equivalent or higher) or Tier 1 or higher federal background investigation on record that can be located
and referenced.

Fingerprint collection shall conform to the procedural and technical specifications of [SP 800-76].

## 2.4 Biometric Data Collection for PIV Card

The following biometric data shall be collected from each PIV applicant:

+ Two fingerprints, for off-card comparison. These shall be taken either from the full set of fingerprints
collected in Section 2.3, or collected independently.

+ An electronic facial image.

The following biometric data may optionally be collected from a PIV applicant:

+ One or two iris images.

+ Two fingerprints, for on-card comparison. It is recommended that these be different than the
fingerprints collected for off-card comparison.

If the biometric data that is collected as specified in this section and in Section 2.3 is collected on separate
occasions, then a 1:1 biometric match of the applicant shall be performed at each visit against biometric
data collected during a previous visit.

Biometric data collection shall conform to the procedural and technical specifications of [SP 800 -76].
The choice of which two fingers is important and may vary between persons. The recommended
selection and order is specified in [SP 800-76].

## 2.5 Biometric Data Use

The full set of fingerprints shall be used for one-to-many identification in the databases of fingerprints
maintained by the FBI.


The two mandatory fingerprints shall be used for preparation of templates to be stored on the PIV Card as
described in Section 4.2.3.1. The fingerprints provide an interagency-interoperable authentication
mechanism through a match-off-card scheme as described in Section 6.2.1. These fingerprints are also
the primary means of authentication during PIV issuance and maintenance processes.

The optional fingerprints may be used for preparation of the fingerprint templates for on-card comparison
as described in Section 4.2.3.1. OCC may be used to support card activation as described in Section
4.3.1. OCC may also be used for cardholder authentication (OCC-AUTH) as described in Section 6.2.2.

The electronic iris images may be stored on the PIV Card as described in Section 4.2.3.1. Agencies may
choose to collect iris biometrics as a second biometric to support multimodal authentication to improve
accuracy, operational suitability, to accommodate user preferences, or as a backup when the fingerprint
biometric is unavailable.

The electronic facial image:

+ shall be stored on the PIV Card as described in Section 4.2.3.1;

+ shall be printed on the PIV Card according to Section 4.1.4.1;

+ may be used for generating a visual image on the monitor of a guard workstation for augmenting the
visual authentication process defined in Section 6.2.6; and

+ may be used for automated facial authentication in operator-attended PIV issuance, reissuance, and
verification data reset processes.

## 2.6 Chain-of-Trust

A card issuer may optionally maintain, for each PIV Card issued, a documentary chain-of-trust for the
identification data it collects. The chain-of-trust is a sequence of related enrollment data records that are
created and maintained through the methods of contemporaneous acquisition of data within each
enrollment data record, and biometric matching of samples between enrollment data records.[^fingerprints]

[^fingerprints]: For example, ten fingerprints for law enforcement checks may be collected at one time and place, and two fingerprints for PIV Card templates may be collected at a later time and different place, provided that the two fingerprints are verified as among the ten original fingerprints.

It is recommended that the following data be included in the chain-of-trust:

+ A log of activities that documents who took the action, what action was taken, when and where the
action took place, and what data was collected.

+ An enrollment data record that contains the most recent collection of each of the biometric data
collected. The enrollment data record describes the circumstances of biometric acquisition including
the name and role of the acquiring agent, the office and organization, time, place, and acquisition
method. The enrollment data record may also document unavailable biometric data or failed attempts
to collect biometric data. The enrollment data record may contain historical biometric data.

+ The most recent unique identifiers (i.e., Federal Agency Smart Credential Number (FASC-N) and
Universally Unique IDentifier (UUID)) issued to the individual. The record may contain historical
unique identifiers.

+ Information about the authorizing entity who has approved the issuance of a credential.

+ Current status of the background investigation, including the results of the investigation once
completed.

+ The evidence of authorization if the credential is issued under a pseudonym.

+ Any data or any subsequent changes in the data about the cardholder. If the changed data is the
cardholder’s name, then the issuer should include the evidence of a formal name change.

The biometric data in the chain-of-trust shall be valid for at most 12 years. In order to mitigate ageing
effects and thereby maintain operational readiness of a cardholder's PIV Card, agencies may require
biometric enrollment more frequently than 12 years.

The chain-of-trust contains personally identifiable information (PII). If implemented, it shall be protected
in a manner that protects the individual’s privacy and maintains the integrity of the chain-of-trust record
both in transit and at rest. A card issuer may import and export a chain-of-trust in the manner and
representation described in [SP 800-156].

The chain-of-trust can be applied in several situations to include:

+ Extended enrollment: a PIV applicant enrolls a full set of fingerprints for background investigations
at one place and time, and two fingerprints for the PIV Card at another place and time. The chain-of-
trust would contain identifiers and two enrollment data records, one with a full-set fingerprint
transaction, and one with two fingerprint templates. The two fingerprint templates would be matched
against the corresponding fingers in the ten-fingerprint data set to link the chain.

+ Reissuance: a PIV cardholder loses his/her card. Since the card issuer has biometric enrollment data
records, the cardholder can perform a 1:1 biometric match to reconnect to the card issuer’s chain-of-
trust. The card issuer need not repeat the identity proofing and registration process. The card issuer
proceeds to issue a new card as described in Section 2.9.1.

+ Interagency transfer: a Federal employee is transferred from one agency to another. When the
employee leaves the old agency, he/she surrenders the PIV Card and it is destroyed. When the
employee arrives at the new agency and is processed in, the card issuer in the new agency requests the
employee’s chain-of-trust from the card issuer in the old agency, and receives the chain-of-trust. The
employee performs a 1:1 biometric match against the chain-of-trust, and the interaction proceeds as
described in Section 2.8.2.

## 2.7 PIV Identity Proofing and Registration Requirements

Departments and agencies shall follow an identity proofing and registration process that meets the
requirements defined below when issuing PIV Cards.

+ The organization shall adopt and use an identity proofing and registration process that is approved in
accordance with [SP 800-79].

+ Biometrics shall be captured as specified in Sections 2.3 and 2.4.

+ The process shall begin by locating and referencing a completed and favorably adjudicated NACI (or
equivalent or higher) or Tier 1 or higher federal background investigation record. In the absence of a
record, the process shall ensure 1) the initiation of a Tier 1 or higher federal background investigation and
2) the completion of the National Agency Check (NAC)[^NAC] of the background investigation. In cases where
the NAC results are not received within 5 days of the NAC initiation, the FBI NCHC (fingerprint check)
portion of the NAC shall be complete before PIV Card issuance.

+ The applicant shall appear in-person at least once before the issuance of a PIV Card.

+ During identity proofing, the applicant shall be required to provide two forms of identity source
documents in original form.[^documents] The identity source documents shall be bound to that applicant and shall
be neither expired nor cancelled. If the two identity source documents bear different names, evidence
of a formal name change shall be provided. The primary identity source document shall be one of the
following forms of identification:

  * a U .S. Passport or a U.S. Passport Card;
  * a Permanent Resident Card or an Alien Registration Receipt Card (Form I-551);
  * a foreign passport;
  * an Employment Authorization Document that contains a photograph (Form I-766);
  * a Driver's license or an ID card issued by a state or possession of the United States provided it
  contains a photograph;
  * a U.S. Military ID card;
  * a U.S. Military dependent's ID card; or
  * a PIV Card.

  The secondary identity source document may be from the list above, but cannot be of the same type
as the primary identity source document.[^secondary] The secondary identity source document may also be one
of the following:

  * a U.S. Social Security Card issued by the Social Security Administration;
  * an original or certified copy of a birth certificate issued by a state, county, municipal
  authority, possession, or outlying possession of the United States bearing an official seal;
  * an ID card issued by a federal, state, or local government agency or entity, provided it
  contains a photograph;
  * a voter's registration card;
  * a U.S. Coast Guard Merchant Mariner Card;
  * a Certificate of U.S. Citizenship (Form N-560 or N-561);
  * a Certificate of Naturalization (Form N-550 or N-570);
  * a U.S. Citizen ID Card (Form I-197);
  * an Identification Card for Use of Resident Citizen in the United States (Form I-179);
  * a Certification of Birth Abroad or Certification of Report of Birth issued by the Department
  of State (Form FS-545 or Form DS-1350);
  * a Temporary Resident Card (Form I-688);
  * an Employment Authorization Card (Form I-688A);
  * a Reentry Permit (Form I-327);
  * a Refugee Travel Document (Form I-571);
  * an Employment authorization document issued by Department of Homeland Security (DHS);
  * an Employment Authorization Document issued by DHS with photograph (Form I-688B);
  * a driver's license issued by a Canadian government entity; or
  * a Native American tribal document.

+ The PIV identity proofing, registration, issuance, and reissuance processes shall adhere to the
principle of separation of duties to ensure that no single individual has the capability to issue a PIV
Card without the cooperation of another authorized person.

The identity proofing and registration process used when verifying the identity of the applicant shall be
accredited by the department or agency as satisfying the requirements above and approved in writing by
the head or deputy secretary (or equivalent) of the Federal department or agency.

The requirements for identity proofing and registration also apply to citizens of foreign countries who are
working for the Federal government overseas. However, a process for identity proofing and registration
must be established using a method approved by the U.S. Department of State’s Bureau of Diplomatic
Security, except for employees under the command of a U.S. area military commander. These procedures
may vary depending on the country.

[^NAC]: The NAC is an automated record check.

[^documents]: Departments and agencies may choose to accept only a subset of the identity source documents listed in this section. For example, in cases where identity proofing for PIV Card issuance is performed prior to verification of employment authorization, departments and agencies may choose to require the applicant to provide identity source documents that satisfy the requirements of Form I-9, Employment Eligibility Verification, in addition to the requirements specified in this section. It is recommended that departments and agencies perform electronic verification of identity source documents, where possible.

[^secondary]: For example, if the primary source document is a foreign passport (e.g., Italy), the secondary source document should not be another foreign passport (e.g., France).


## 2.8 PIV Card Issuance Requirements

Departments and agencies shall meet the requirements defined below when issuing PIV Cards. The
issuance process used when issuing PIV Cards shall be accredited by the department or agency as
satisfying the requirements below and approved in writing by the head or deputy secretary (or equivalent)
of the Federal department or agency.

+ PIV Cards are issued after a proper authority has authorized issuance of the credential.

+ The organization shall use an approved PIV credential issuance process in accordance with
[SP 800-79].

+ Before issuing the PIV Card, the process shall ensure that a previously completed and favorably adjudicated
NACI (or equivalent or higher) or Tier 1 or higher federal background investigation is on record. In the
absence of a record, the required federal background investigation shall be initiated.[^IDMS] The PIV Card should
not be issued before the results of the NAC are complete. However, if the results of the NAC have not been
received in 5 days, the PIV Card may be issued based on the FBI NCHC. In the absence of an FBI NCHC
(e.g., due to unclassifiable fingerprints) the NAC results are required prior to issuing a PIV Card. The PIV
Card shall be terminated if the results of the background investigation so justify.

+ Biometrics used to personalize the PIV Card must be those captured during the identity proofing and
registration process.

+ During the issuance process, the issuer shall verify that the individual to whom the PIV Card is to be
issued is the same as the intended applicant/recipient as approved by the appropriate authority.
Before the card is provided to the applicant, the issuer shall perform a 1:1 biometric match of the
applicant against biometrics available on the PIV Card or in the chain-of-trust. The 1:1 biometric
match requires either a match of fingerprint(s) or, if unavailable, other optional biometric data that are
available. Minimum accuracy requirements for the biometric match are specified in [SP 800-76]. On
successful match, the PIV Card shall be released to the applicant. If the match is unsuccessful, or if
no biometric data is available, the cardholder shall provide two identity source documents (as
specified in Section 2.7), and an attending operator shall inspect these and compare the cardholder
with the facial image printed on the PIV Card.

+ The organization shall issue PIV credentials only through systems and providers whose reliability has
been established by the agency and so documented and approved in writing (i.e., accredited) in
accordance with [SP 800-79].

+ The PIV Card shall be valid for no more than six years.

PIV Cards that contain topographical defects (e.g., scratches, poor color, fading, etc.) or that are not
properly printed shall be destroyed. The PIV Card issuer is responsible for the card stock, its
management, and its integrity.

[^IDMS]: The identity management system (IDMS) should reflect the adjudication status of each PIV cardholder.

### 2.8.1 Special Rule for Pseudonyms

In limited circumstances Federal employees and contractors are permitted to use pseudonyms during the
performance of their official duties with the approval of their employing agency. If an agency determines
that use of a pseudonym is necessary to protect an employee or contractor (e.g., from physical harm,
severe distress, or harassment),[^pseudonym] the agency may formally authorize the issuance of a PIV Card to the
employee or contractor using the agency-approved pseudonym. The issuance of a PIV Card using an
authorized pseudonym shall follow the procedures in Section 2.8, PIV Card Issuance Requirements,
except that the card issuer must receive satisfactory evidence that the pseudonym is authorized by the
agency.

[^pseudonym]: See, for example, Section 10.5.7 of the Internal Revenue Service Manual (http://www.irs.gov/irm/index.html), which authorizes approval by an employee's supervisor of the use of a pseudonym to protect the employee's personal safety.

### 2.8.2 Grace Period

In some instances an individual's status as a Federal employee or contractor will lapse for a brief time
period. For example, a Federal employee may leave one Federal agency for another Federal agency and
thus occur a short employment lapse period, or an individual who was under contract to a Federal agency
may receive a new contract from that agency shortly after the previous contract expired. In these
instances, the card issuer may issue a new PIV Card without repeating the identity proofing and
registration process if the issuer has access to the applicant’s chain-of-trust record and the applicant can
be reconnected to the chain-of-trust record.[^lapse]

When issuing a PIV Card under the grace period, the card issuer shall verify that PIV Card issuance has
been authorized by a proper authority and that the employee’s or contractor’s background investigation is
valid. Re-investigations shall be performed if required, in accordance with OPM guidance. At the time
of issuance, the card issuer shall perform a 1:1 biometric match of the applicant to reconnect to the chain-
of-trust. The 1:1 biometric match requires either a match of fingerprint(s) or, if unavailable, other
optional biometric data that are available. On successful match, the new PIV Card shall be released to the
applicant. If the match is unsuccessful, or if no biometric data is available, the cardholder shall provide
two identity source documents (as specified in Section 2.7), and an attending operator shall inspect these
and compare the cardholder with the facial image retrieved from the enrollment data record and the facial
image printed on the new PIV Card.

[^lapse]: For the purposes of this section, a lapse is considered to be brief if it is not long enough to require that a new background investigation be performed. OPM currently requires a new background investigation to be performed when there has been a break in service of greater than two years. 

## 2.9 PIV Card Maintenance Requirements

The PIV Card shall be maintained using processes that comply with this section.

The data and credentials held by the PIV Card may need to be updated or invalidated prior to the
expiration date of the card. The cardholder may change his or her name, retire, or change jobs; or the
employment may be terminated, thus requiring invalidation of a previously issued card. In this regard,
procedures for PIV Card maintenance must be integrated into department and agency procedures to
ensure effective card maintenance. In order to maintain operational readiness of a cardholder's PIV Card,
agencies may require PIV Card update, reissuance, or biometric enrollment more frequently than the
maximum PIV Card and biometric lifetimes stated in this Standard. Shorter lifetimes may be specified by
agency policy collectively, or on a case-by-case basis as sub-par operation is encountered.

### 2.9.1 PIV Card Reissuance Requirements

Reissuance is the process by which a new PIV Card is issued to a cardholder without the need to repeat
the entire identity proofing and registration procedure. The reissuance process may be used to replace a
PIV Card that is nearing expiration, in the event of an employee status or attribute change, or to replace a
PIV Card that has been compromised, lost, stolen, or damaged. The cardholder may also apply for
reissuance of a PIV Card if one or more logical credentials have been compromised. The entire identity
proofing, registration, and issuance process, as described in Sections 2.7 and 2.8, shall be repeated if the
issuer does not maintain a chain-of-trust record for the cardholder or if the reissuance process was not
started before the old PIV Card expired.

If the expiration date of the new PIV Card is later than the expiration date of the old card, or if any data
about the cardholder is being changed, the card issuer shall ensure that a proper authority has authorized
the issuance of the new PIV Card. The issuer shall ensure that the proper authority has verified that the
employee’s or contractor’s background investigation is valid before reissuing the card and associated
credentials.[^IDMS] If the expiration date of the new PIV Card is later than the expiration date of the old card
then re-investigations shall be performed if required, in accordance with OPM guidance.

The issuer shall perform a 1:1 biometric match of the applicant to reconnect to the chain-of-trust. The 1:1
biometric match requires either a match of fingerprint(s) or, if unavailable, other optional biometric data

that are available (either on the PIV Card or in the chain-of-trust). Minimum accuracy requirements for
the biometric match are specified in [SP 800-76]. On successful match, the new PIV Card shall be
released to the applicant. If the match is unsuccessful, or if no biometric data is available, the cardholder
shall provide two identity source documents (as specified in Section 2.7), and an attending operator shall
inspect these and compare the cardholder with the facial image retrieved from the enrollment data record
and the facial image printed on the new PIV Card.

The old PIV Card shall be revoked when the new PIV Card is issued:

+ The old PIV Card shall be collected and destroyed, if possible.

+ Any databases maintained by the PIV Card issuer that contain FASC-N or UUID values from the old
PIV Card must be updated to reflect the change in status.

+ If the old PIV Card cannot be collected and destroyed, or if the old PIV Card has been compromised
or damaged, then the certification authority (CA) shall be informed and the certificates corresponding
to the PIV Authentication key and asymmetric Card Authentication key on the old PIV Card shall be
revoked. If present, the certificates corresponding to the digital signature key and the key
management key shall also be revoked.

In the case of a lost, stolen, or compromised card, normal revocation procedures shall be completed
within 18 hours of notification. In certain cases, 18 hours is an unacceptable delay and in those cases
emergency procedures must be executed to disseminate the information as rapidly as possible.
Departments and agencies are required to have procedures in place to issue emergency notifications in
such cases.

If there is any data change about the cardholder, the issuer will record this in the chain-of-trust, if
applicable. If the changed data is the cardholder’s name, then the issuer shall meet the requirements in
Section 2.9.1.1, Special Rule for Name Change by Cardholder.

Previously collected biometric data may be reused with the new PIV Card if the expiration date of the
new PIV Card is no later than 12 years after the date that the biometric data was obtained. As biometric
authentication accuracy degrades with the time elapsed since initial collection, issuers may elect to refresh
the biometric data after reconnecting the applicant to their chain-of-trust. Even if the same biometric data
is reused with the new PIV Card, the digital signature must be recomputed with the new FASC-N and
UUID.

A new PIV Authentication certificate and a new Card Authentication certificate shall be generated. The
corresponding certificates shall be populated with the new FASC-N and UUID. For cardholders who are
required to have a digital signature certificate, a new digital signature certificate shall also be generated.
Key management key(s) and certificate(s) may be imported to the new PIV Card.

#### 2.9.1.1 Special Rule for Name Change by Cardholder

Name changes frequently occur as a result of marriage, divorce, or as a matter of personal preference. In
the event that a cardholder notifies a card issuer that his or her name has changed, and presents the card
issuer with evidence of a formal name change, such as a marriage certificate, a divorce decree, judicial
recognition of a name change, or other mechanism permitted by State law or regulation, the card issuer
shall issue the cardholder a new card following the procedures set out in Section 2.9.1, PIV Card
Reissuance Requirements. If the expiration date of the new card is no later than the expiration date of the
old PIV Card and no data about the cardholder, other than the cardholder’s name, is being changed, then
the new PIV Card may be issued without obtaining the approval of a proper authority and without
performing a re-investigation.

### 2.9.2 PIV Card Post Issuance Update Requirements

A PIV Card post issuance update may be performed without replacing the PIV Card in cases where none
of the printed information on the surface of the card is changed. The post issuance update applies to cases
where one or more certificates, keys, biometric data objects, or signed data objects are updated. A post
issuance update shall not modify the PIV Card expiration date, FASC-N, or UUID.

A PIV Card post issuance update may be done locally (performed with the issuer in physical custody of
the PIV Card) or remotely (performed with the PIV Card at a remote location). Post issuance updates
shall be performed with issuer security controls equivalent to those applied during PIV Card reissuance.
For remote post issuance updates, the following shall apply:

+ Communication between the PIV Card issuer and the PIV Card shall occur only over mutually
authenticated secure sessions between tested and validated cryptographic modules (one being the PIV
Card).

+ Data transmitted between the PIV Card issuer and PIV Card shall be encrypted and contain data
integrity checks.

+ The PIV Card Application will communicate with no end point entity other than the PIV Card issuer
during the remote post issuance update.

Post issuance updates to biometric data objects, other than to the digital signature blocks within the
biometric data objects, shall satisfy the requirements for verification data reset specified in Section 2.9.3.

If the PIV Authentication key, asymmetric Card Authentication key, the digital signature key, or the key
management key, was compromised, the corresponding certificate shall be revoked.

### 2.9.3 PIV Card Verification Data Reset

The Personal Identification Number (PIN) on a PIV Card may need to be reset if the cardholder has
forgotten the PIN or if PIN-based cardholder authentication has been disabled from the usage of an
invalid PIN more than the allowed number of retries stipulated by the department or agency.[^pinreset] PIN reset
may be performed in-person at the issuer’s facility, at an unattended kiosk operated by the issuer, or
remotely via a general computing platform:

+ When PIN reset is performed in-person at the issuer's facility, before providing the reset PIV Card
back to the cardholder, the issuer shall perform a 1:1 biometric match to ensure that the cardholder's
biometric matches either the stored biometric on the PIV Card or biometric data stored in the chain-
of-trust. In cases where a biometric match is not possible, the cardholder shall provide the PIV Card
to be reset and another primary identity source document (as specified in Section 2.7). An attending
operator shall inspect these and compare the cardholder with the facial image retrieved from the
enrollment data record and the facial image printed on the card.

+ PIN reset at an unattended issuer-operated kiosk shall ensure that the PIV Card is authenticated and
that the cardholder’s biometric matches either the stored biometric on the PIV Card, through an on-
card 1:1 biometric match, or biometric data stored in the chain-of-trust, through an off-card 1:1
biometric match. If the biometric match or card authentication is unsuccessful, the kiosk shall not
reset the PIV Card.

+ Remote PIN reset on a general computing platform (e.g., desktop, laptop) shall only be performed if
the following requirements are met:

  * the cardholder initiates a PIN reset with the issuer operator;
  * the operator authenticates the owner of the PIV Card through an out-of-band authentication
  procedure (e.g., pre-registered knowledge tokens); and
  * the cardholder’s biometric matches the stored biometric on the PIV Card through a 1:1 on-
  card biometric comparison.

The remote PIN reset operation shall satisfy the requirements for remote post issuance updates
specified in Section 2.9.2.

Departments and agencies may adopt more stringent procedures for PIN reset (including disallowing PIN
reset). PIN reset procedures shall be formally documented by each department and agency.

Verification data other than the PIN may also be reset (i.e., re-enrollment) by the card issuer. Before the
reset, the issuer shall perform a 1:1 biometric match of the cardholder to reconnect to the chain-of-trust.
The type of biometric used for the match shall not be the same as the type of biometric data that is being
reset. For example, if fingerprint templates for on-card comparison are being reset, then a 1:1 iris match
could be used to reconnect to the chain-of-trust. If no alternative biometric data is available, the
cardholder shall provide the PIV Card to be reset and another primary identity source document (as
specified in Section 2.7). An attending operator shall inspect these and compare the cardholder with the
facial image retrieved from the enrollment data record and the facial image printed on the PIV Card.

New verification reference data shall be enrolled. The PIV Card’s activation methods associated with the
verification data shall be reset and the new verification data shall be stored on the card.

Departments and agencies may adopt more stringent procedures for verification data reset (including
disallowing verification data reset); such procedures shall be formally documented by each department
and agency.

[^pinreset]: Cardholders may change their PINs anytime by providing the current PIN and the new PIN values.

### 2.9.4 PIV Card Termination Requirements

A PIV card is terminated when the department or agency that issued the card determines that the
cardholder is no longer eligible to have a PIV Card. The PIV Card shall be terminated under the
following circumstances:

+ a Federal employee separates (voluntarily or involuntarily) from Federal service;

+ a contractor changes positions and no longer needs access to Federal buildings or systems;

+ a cardholder passes away;

+ a determination is made after completion of a cardholder’s background investigation that the
cardholder should not have a PIV Card; or

+ a cardholder is determined to hold a fraudulent identity.


Similar to the situation in which the card or a credential is compromised, normal termination procedures
must be in place as to ensure the following:

+ The PIV Card itself is revoked:

  * The PIV Card shall be collected and destroyed, if possible.
  * Any databases maintained by the PIV Card issuer that indicate current valid (or invalid)
  FASC-N or UUID values must be updated to reflect the change in status.
  * If the PIV Card cannot be collected and destroyed, the CA shall be informed and the
  certificates corresponding to the PIV Authentication key and the asymmetric Card
  Authentication key on the PIV Card shall be revoked. The certificates corresponding to the
  digital signature and key management keys shall also be revoked, if present.

+ The PII collected from the cardholder is disposed of in accordance with the stated privacy and data
retention policies of the department or agency.

If the card cannot be collected, normal termination procedures shall be completed within 18 hours of
notification. In certain cases, 18 hours is an unacceptable delay and in those cases emergency procedures
must be executed to disseminate the information as rapidly as possible. Departments and agencies are
required to have procedures in place to issue emergency notifications in such cases.

## 2.10 Derived PIV Credentials Issuance Requirements

Valid PIV Cards may be used as the basis for issuing derived PIV credentials in accordance with NIST
Special Publication 800-157, Guidelines for Derived Personal Identity Verification (PIV) Credentials
[SP 800-157]. When a cardholder's PIV Card is terminated as specified in Section 2.9.4, any derived PIV
credentials issued to the cardholder shall also be terminated.

## 2.11 PIV Privacy Requirements

HSPD-12 explicitly states that “protect[ing] personal privacy” is a requirement of the PIV system. As
such, all departments and agencies shall implement the PIV system in accordance with the spirit and letter
of all privacy controls specified in this Standard, as well as those specified in Federal privacy laws and
policies including but not limited to the E-Government Act of 2002 [E-Gov], the Privacy Act of 1974
[PRIVACY], and OMB Memorandum M-03-22 [OMB0322], as applicable.

Departments and agencies may have a wide variety of uses of the PIV system and its components that
were not intended or anticipated by the President in issuing [HSPD-12]. In considering whether a
proposed use of the PIV system is appropriate, departments and agencies shall consider the
aforementioned control objectives and the purpose of this Standard, namely “to enhance security, increase
Government efficiency, reduce identity fraud, and protect personal privacy” [HSPD-12]. No department
or agency shall implement a use of the identity credential inconsistent with these control objectives.

To ensure the privacy throughout PIV lifecycle, departments and agencies shall do the following:

- Assign an individual to the role of privacy official.[^privacyofficial] The privacy official is the individual who
    oversees privacy-related matters in the PIV system and is responsible for implementing the privacy
    requirements in the Standard. The individual serving in this role shall not assume any other
    operational role in the PIV system.

- Conduct a comprehensive Privacy Impact Assessment (PIA) on systems containing PII for the
    purpose of implementing PIV, consistent with the methodology of [E-Gov] and the requirements of
    [OMB0322]. Consult with appropriate personnel responsible for privacy issues at the department or
    agency (e.g., Chief Information Officer) implementing the PIV system.
- Write, publish, and maintain a clear and comprehensive document listing the types of information that
    will be collected (e.g., transactional information, PII), the purpose of collection, what information
    may be disclosed to whom during the life of the credential, how the information will be protected, and
    the complete set of uses of the credential and related information at the department or agency.
    Provide PIV applicants full disclosure of the intended uses of the information associated with the PIV
    Card and the related privacy implications.
- Assure that systems that contain PII for the purpose of enabling the implementation of PIV are
    handled in full compliance with fair information practices as defined in [PRIVACY].
- Maintain appeals procedures for those who are denied a credential or whose credentials are revoked.
- Ensure that only personnel with a legitimate need for access to PII in the PIV system are authorized to
    access the PII, including but not limited to information and databases maintained for registration and
    credential issuance.[^access]
- Coordinate with appropriate department or agency officials to define consequences for violating
    privacy policies of the PIV system.
- Assure that the technologies used in the department or agency’s implementation of the PIV system
    allow for continuous auditing of compliance with stated privacy policies and practices governing the
    collection, use, and distribution of information in the operation of the program.
- Utilize security controls described in [SP 800-53], Recommended Security Controls for Federal
    Information Systems, to accomplish privacy goals, where applicable.
- Ensure that the technologies used to implement PIV sustain and do not erode privacy protections
    relating to the use, collection, and disclosure of PII. Agencies may choose to deploy PIV Cards with
    electromagnetically opaque holders or other technology to protect against any unauthorized
    contactless access to information stored on a PIV Card.

[^privacyofficial]: Privacy official refers to the Senior Agency Official for Privacy (SAOP) or Chief Privacy Officer (CPO).

[^access]: Agencies may refer to NIST SP 800-122 [SP 800-122], Guide to Protecting the Confidentiality of Personally Identifiable Information (PII), for a best practice guideline on protection of PII.
