---
layout: default
title: Common Identification, Security, and Privacy Requirements
navOrder: 2
navTitle: Requirements
permalink: /requirements/
---
# 2. Common Identification, Security, and Privacy Requirements {#s-2}

This section addresses the fundamental control and security objectives outlined in [[HSPD-12]](../_Appendix/references.md#ref-HSPD-12), including
the identity proofing requirements for Federal employees and contractors.

## 2.1 Control Objectives {#s-2-1}

[[HSPD-12]](../_Appendix/references.md#ref-HSPD-12) established control objectives for secure and reliable identification of Federal employees and
contractors. These control objectives, provided in paragraph 3 of the directive, are quoted here:

> (3) "Secure and reliable forms of identification" for purposes of this directive means identification that (a)
is issued based on sound criteria for verifying an individual employee's identity; (b) is strongly resistant to
identity fraud, tampering, counterfeiting, and terrorist exploitation; (c) can be rapidly authenticated
electronically; and (d) is issued only by providers whose reliability has been established by an official
accreditation process.


Each agency's PIV implementation SHALL meet the four control objectives (a) through (d) listed above
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


## 2.2 Credentialing Requirements {#s-2-2}

Federal departments and agencies SHALL use the credentialing guidance issued by the Director of the Office
of Personnel Management (OPM)[^OPM] and OMB[^OMB].

[^OPM]: For example, [[FCS]](../references/#ref-FCS){:.footnote-ref} and the Federal Investigative Standards 5.

[^OMB]: For example, [[OMB0524]](../references/#ref-OMB0524){:.footnote-ref}.

## 2.3 Biometric Data Collection for Background Investigations {#s-2-3}

The following biometric data SHALL be collected from each PIV applicant:

+ A full set of fingerprints. Biometric identification using fingerprints is the primary input to law
enforcement checks. In cases where ten fingerprints are not available, then as many fingers as
possible SHALL be imaged. In cases where obtaining any fingerprints is impossible, agencies SHALL seek
OPM guidance for alternative means of performing the law enforcement checks.

This collection is not necessary for applicants who have a completed and favorably adjudicated NACI (or
equivalent or higher) or Tier 1 or higher federal background investigation on record that can be located
and referenced.

Fingerprint collection SHALL conform to the procedural and technical specifications of [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76).

## 2.4 Biometric Data Collection for PIV Card {#s-2-4}

The following biometric data SHALL be collected from each PIV applicant:

+ Two fingerprints, for off-card one-to-one comparison. These fingerprints MAY be taken from the full set of fingerprints
collected in [Section 2.3](requirements.md#s-2-3).

+ An electronic facial image.

The following biometric data MAY optionally be collected from a PIV applicant:

+ One or two iris images.

+ Two fingerprints, for on-card one-to-one comparison (OCC). These fingerprints MAY be taken from the full set of fingerprints collected in [Section 2.3](requirements.md#s-2-3) and SHOULD be imaged from fingers not imaged for off-card one-to-one comparison.

If the biometric data that is collected as specified in this section and in [Section 2.3](requirements.md#s-2-3) is collected on separate
occasions, then a biometric verification of the applicant's biometric characteristics  SHALL be performed at each visit against biometric
data collected during a previous visit.

Biometric data collection SHALL conform to the procedural and technical specifications of [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76).
The choice of which two fingers is important and MAY vary between persons. The recommended
selection and order is specified in [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76).

## 2.5 Biometric Data Use {#s-2-5}

The full set of fingerprints SHALL be used for biometric identification against the databases of fingerprints
maintained by the FBI.


The two mandatory fingerprints SHALL be used for preparation of biometric templates to be stored on the PIV Card as
described in [Section 4.2.3.1](frontend.md#s-4-2-3-1). The fingerprints provide an interagency-interoperable authentication
mechanism through a off-card comparison scheme as described in [Section 6.2.1](authentication.md#s-6-2-1). These fingerprints are also
the primary means of authentication during PIV issuance and maintenance processes.

The optional fingerprints MAY be used for preparation of the biometric templates for OCC
as described in [Section 4.2.3.1](frontend.md#s-4-2-3-1). OCC MAY be used to support card activation as described in 
[Section 4.3.1](frontend.md#s-4-3-1). OCC MAY also be used for cardholder authentication (OCC-AUTH) as described in [Section 6.2.2](authentication.md#s-6-2-2).

The electronic iris images MAY be stored on the PIV Card as described in [Section 4.2.3.1](frontend.md#s-4-2-3-1). Agencies MAY
choose to collect iris images as a second biometric characteristic to support multi-modal biometric verification to improve
accuracy, operational suitability, to accommodate user preferences, or as a backup when fingerprint
biometric data records are unavailable.

The electronic facial image:

+ SHALL be stored on the PIV Card as described in [Section 4.2.3.1](frontend.md#s-4-2-3-1);

+ SHALL be printed on the PIV Card according to [Section 4.1.4.1](frontend.md#s-4-1-4-1);

+ MAY be retrieved and displayed on guard workstations to augment 
  authentication processes from [Section 6.2](authentication.md#s-6-2).

+ MAY be used by biometric systems in operator-attended PIV issuance, reissuance, and
verification data reset processes; and

+ MAY be used as an additional biometric characteristic to support multi-modal biometric verification to improve accuracy.

## 2.6 Chain-of-Trust {#s-2-6}

A card issuer MAY optionally maintain, for each PIV Card issued, a documentary chain-of-trust for the
identification data it collects. The chain-of-trust is a sequence of related enrollment data records that are
created and maintained through the methods of contemporaneous acquisition of data within each
enrollment data record, and biometric verifications of samples between enrollment data records.[^fingerprints]

[^fingerprints]: For example, ten fingerprints for law enforcement checks MAY be collected at one time and place, and two fingerprints for PIV Card templates MAY be collected at a later time and different place, provided that a biometric comparison confirms that the two fingerprints belong to the original set of ten fingerprints. 

It is recommended that the following data be included in the chain-of-trust:

+ A log of activities that documents who took the action, what action was taken, when and where the
action took place, and what data was collected.

+ An enrollment data record that contains the most recent collection of each of the biometric data
collected. The enrollment data record describes the circumstances of biometric acquisition including
the name and role of the acquiring agent, the office and organization, time, place, and acquisition
method. The enrollment data record may also document unavailable biometric data or failed attempts
to collect biometric data. The enrollment data record may contain historical biometric data records.

+ The most recent unique identifiers (i.e., Federal Agency Smart Credential Number (FASC-N) and
Universally Unique IDentifier (UUID)) issued to the individual. The record may contain historical
unique identifiers.

+ Information about the authorizing entity who has approved the issuance of a credential.

+ Current status of the background investigation, including the results of the investigation once
completed.

+ The evidence of authorization if the credential is issued under a pseudonym.

+ Any data or any subsequent changes in the data about the cardholder. If the changed data is the
cardholder's name, then the issuer SHOULD include the evidence of a formal name change.

The biometric data records in the chain-of-trust SHALL be valid for at most 12 years. In order to mitigate ageing
effects and thereby maintain operational readiness of a cardholder's PIV Card, agencies MAY require
biometric enrollment more frequently than 12 years.

The chain-of-trust contains personally identifiable information (PII). If implemented, it SHALL be protected
in a manner that protects the individual's privacy and maintains the integrity of the chain-of-trust record
both in transit and at rest. A card issuer may import and export a chain-of-trust in the manner and
representation described in [[SP 800-156]](../_Appendix/references.md#ref-SP-800-156).

The chain-of-trust can be applied in several situations to include:

+ Extended enrollment: a PIV applicant enrolls a full set of fingerprints for background investigations
at one place and time, and two fingerprints for the PIV Card at another place and time. The chain-of-trust would contain identifiers and two enrollment data records, one with a full-set fingerprint
transaction, and one with two fingerprint templates. The two fingerprint templates would be verified
against the corresponding fingers in the ten-fingerprint data set to link the chain.

+ Reissuance: a PIV cardholder loses his/her card. Since the card issuer has biometric data
records from enrollment, the cardholder can perform a biometric verification to reconnect to the card issuing chain-of-trust. The card issuer NEED NOT repeat the identity proofing and registration process. The card issuer
proceeds to issue a new card as described in [Section 2.9.1](requirements.md#s-2-9-1).

+ Interagency transfer: a Federal employee is transferred from one agency to another. When the
employee leaves the old agency, he/she surrenders the PIV Card and it is destroyed. When the
employee arrives at the new agency and is processed in, the card issuer in the new agency requests the
employee's chain-of-trust from the card issuer in the old agency, and receives the chain-of-trust. The
employee performs a biometric verification against the chain-of-trust, and the interaction proceeds as
described in [Section 2.8.2](requirements.md#s-2-8-2).

## 2.7 PIV Identity Proofing and Registration Requirements {#s-2-7}

Departments and agencies SHALL follow an identity proofing and registration process that meets the
requirements defined below when issuing PIV Cards.

+ The organization SHALL adopt and use an identity proofing and registration process that is approved in
accordance with [[SP 800-79]](../_Appendix/references.md#ref-SP-800-79).

+ Biometrics data SHALL be captured as specified in Sections [2.3](requirements.md#s-2-3) and [2.4](requirements.md#s-2-4).

+ The process SHALL begin by locating and referencing a completed and favorably adjudicated NACI (or
equivalent or higher) or Tier 1 or higher federal background investigation record. In the absence of a
record, the process SHALL ensure 1) the initiation of a Tier 1 or higher federal background investigation and
2) the completion of the National Agency Check (NAC)[^NAC] of the background investigation. In cases where
the NAC results are not received within 5 days of the NAC initiation, the FBI NCHC (fingerprint check)
portion of the NAC SHALL be complete before PIV Card issuance.

+ The applicant SHALL appear in-person at least once before the issuance of a PIV Card, either on the premises of the issuer, or at a supervised remote identity proofing station as described in [Section 2.7.1](#s-2-7-1).

+ During identity proofing, the applicant SHALL be required to provide two forms of identity source
documents in original form.[^documents] The identity source documents SHALL be bound to that applicant and SHALL
be neither expired nor cancelled. If the two identity source documents bear different names, evidence
of a formal name change SHALL be provided. At least one identity source document SHALL meet the requirements of Strong evidence as specified in [[SP 800-63A]](../_Appendix/references.md#ref-SP-800-63A) Section 5.2.1 and be one of the
following forms of identification:

  * a U.S. Passport or a U.S. Passport Card;
  * a Permanent Resident Card or an Alien Registration Receipt Card (Form I-551);
  * a foreign passport;
  * an Employment Authorization Document that contains a photograph (Form I-766);
  * a [[REAL-ID]](../_Appendix/references.md#ref-REAL-ID) compliant Driver's license or [[REAL-ID]](../_Appendix/references.md#ref-REAL-ID) compliant ID card issued by a state or possession of the United States;
  * a U.S. Military ID card;
  * a U.S. Military dependent's ID card; or
  * a PIV Card.

  The second piece of evidence may be from the list above, provided it is not of the same type
as the primary identity source document.[^second] The second identity source document may also be one
of the following:

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
  * a Reentry Permit (Form I-327);
  * an Employment authorization document issued by Department of Homeland Security (DHS);
  * a driver's license issued by a Canadian government entity;
  * a Native American tribal document;
  * a U.S. Social Security Card issued by the Social Security Administration;
  * an original or certified copy of a birth certificate issued by a state, county, municipal
  authority, possession, or outlying possession of the United States bearing an official seal; or
  * another piece of evidence that meets the requirements of Fair evidence specified in [[SP 800-63A]](../_Appendix/references.md#ref-SP-800-63A) Section 5.2.1.

+ The PIV identity proofing, registration, issuance, and reissuance processes SHALL adhere to the
principle of separation of duties to ensure that no single individual has the capability to issue a PIV
Card without the cooperation of another authorized person.

> Note: One piece of Strong evidence and one other piece of evidence meeting the requirements of Fair evidence in [[SP 800-63A]](../_Appendix/references.md#ref-SP-800-63A) are considered sufficient for issuance of a PIV card because the requirement for a federal background investigation is considered a compensating control for identity proofing at Identity Assurance Level 3.

The identity proofing and registration process used when verifying the identity of the applicant SHALL be
accredited by the department or agency as satisfying the requirements above and approved in writing by
the head or deputy secretary (or equivalent) of the Federal department or agency.

The requirements for identity proofing and registration also apply to citizens of foreign countries who are
working for the Federal government overseas. However, a process for identity proofing and registration
must be established using a method approved by the U.S. Department of State's Bureau of Diplomatic
Security, except for employees under the command of a U.S. area military commander. These procedures
may vary depending on the country.

[^NAC]: The NAC is an automated record check.

[^documents]: Departments and agencies may choose to accept only a subset of the identity source documents listed in this section. For example, in cases where identity proofing for PIV Card issuance is performed prior to verification of employment authorization, departments and agencies MAY choose to require the applicant to provide identity source documents that satisfy the requirements of Form I-9, *Employment Eligibility Verification*, in addition to the requirements specified in this section. It is recommended that departments and agencies perform electronic verification of identity source documents, where possible.

[^second]: For example, if the first source document is a foreign passport (e.g., Italy), the second source document SHOULD NOT be another foreign passport (e.g., France).

### 2.7.1 Supervised Remote Identity Proofing {#s-2-7-1}

Departments and agencies MAY use a supervised remote identity proofing process in conjunction with the issuance of PIV Cards. This process involves the use of an issuer-controlled station at a remote location that is connected to a trained operator at a central location. The goal of this arrangement is to permit identity proofing of individuals in remote locations where it is not practical for them to travel to the agency for in-person identity proofing.

Supervised remote identity proofing takes advantage of improvements in sensor technology (cameras and biometric capture devices) and communications bandwidth to closely duplicate the security of in-person identity proofing. This is done through the use of specialized equipment to support an enrollment station that is under the control of either the issuer or a third party that is trusted by the issuer.

The following forms of protection SHALL be provided by either inherent capabilities of the station or staff at the station location:

* Ensuring that only a single individual (applicant) interacts with the station during any identity proofing session;
* Ensuring that the physical integrity of the station and its sensors is maintained at all times;
* Reporting any problems with the station to the issuer.

Supervised remote identity proofing SHALL meet the following requirements:

* The station SHALL be maintained in a controlled access environment, and SHALL be monitored by staff at the station location while it is being used.
* The issuer SHALL have a live operator participate remotely with the applicant for the entirety of the identity proofing session.
* The issuer SHALL require operators to have undergone a training program to detect potential fraud and to properly perform a supervised remote proofing session.
* The operator SHALL monitor the entire identity proofing session, from which the applicant SHALL NOT depart, by at least one continuous high-resolution video transmission of the applicant.
* The operator SHALL require all actions taken by the applicant during the identity proofing session to be clearly visible to the operator.
* The operator SHALL require that all validation of evidence (e.g., via chip or wireless technologies or through inspection of document security features) be performed using integrated scanners and sensors.
* The issuer SHALL ensure that all communications occur over a mutually authenticated protected channel.

If biometric data cannot be collected as per the criteria defined in [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76) or if validation of the identity evidence is inadequate, supervised remote identity proofing SHALL NOT be used and the identity proofing and enrollment shall be performed in person at the issuer’s facility.
The trained operator SHALL terminate a supervised remote identity proofing
session and require in-person identity proofing at an issuing facility if
there is reasonable basis to believe[^believe] that the applicant is attempting
to bypass protection capabilities of the station. 

[^believe]: A reasonable basis to believe occurs when a disinterested observer, with knowledge of the same facts and circumstances, would reasonably reach the same conclusion.

## 2.8 PIV Card Issuance Requirements {#s-2-8}

Departments and agencies SHALL meet the requirements defined below when issuing PIV Cards. The
issuance process used when issuing PIV Cards SHALL be accredited by the department or agency as
satisfying the requirements below and approved in writing by the head or deputy secretary (or equivalent)
of the Federal department or agency.

+ PIV Cards are issued after a proper authority has authorized issuance of the credential.

+ The organization SHALL use an approved PIV credential issuance process in accordance with
[[SP 800-79]](../_Appendix/references.md#ref-SP-800-79).

+ Before issuing the PIV Card, the process SHALL ensure that a previously completed and favorably adjudicated
NACI (or equivalent or higher) or Tier 1 or higher federal background investigation is on record. In the
absence of a record, the required federal background investigation SHALL be initiated.[^IDMS] The PIV Card SHOULD NOT be issued before the results of the NAC are complete. However, if the results of the NAC have not been
received in 5 days, the PIV Card may be issued based on the FBI NCHC. In the absence of an FBI NCHC
(e.g., due to unclassifiable fingerprints) the NAC results are required prior to issuing a PIV Card. The PIV
Card SHALL be terminated if the results of the background investigation so justify.

+ Biometric data used to personalize the PIV Card must be those captured during the identity proofing and
registration process.

+ During the issuance process, the issuer SHALL verify that the individual to whom the PIV Card is to be
issued is the same as the intended applicant/recipient as approved by the appropriate authority.
Before the card is provided to the applicant, the issuer SHALL perform a one-to-one comparison of the
applicant against biometric data records available on the PIV Card or in the chain-of-trust. The one-to-one
comparison requires either a comparison of fingerprint(s) or, if unavailable, other optional biometric data records that are
available. Minimum accuracy requirements for the biometric verification are specified in [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76). On
a positive biometric verification decision, the PIV Card SHALL be released to the applicant. If the biometric verification decision is negative, or if
no biometric data records are available, the cardholder SHALL provide two identity source documents (as
specified in [Section 2.7](requirements.md#s-2-7)), and an attending operator SHALL inspect these and compare the cardholder
with the facial image printed on the PIV Card.

+ The organization SHALL issue PIV credentials only through systems and providers whose reliability has
been established by the agency and so documented and approved in writing (i.e., accredited) in
accordance with [[SP 800-79]](../_Appendix/references.md#ref-SP-800-79).

+ The PIV Card SHALL be valid for no more than six years.

PIV Cards that contain topographical defects (e.g., scratches, poor color, fading, etc.) or that are not
properly printed SHALL be destroyed. The PIV Card issuer is responsible for the card stock, its
management, and its integrity.

[^IDMS]: The identity management system (IDMS) SHOULD reflect the adjudication status of each PIV cardholder.

### 2.8.1 Special Rule for Pseudonyms {#s-2-8-1}

In limited circumstances Federal employees and contractors are permitted to use pseudonyms during the
performance of their official duties with the approval of their employing agency. If an agency determines
that use of a pseudonym is necessary to protect an employee or contractor (e.g., from physical harm,
severe distress, or harassment),[^pseudonym] the agency may formally authorize the issuance of a PIV Card to the
employee or contractor using the agency-approved pseudonym. The issuance of a PIV Card using an
authorized pseudonym SHALL follow the procedures in [Section 2.8](requirements.md#s-2-8), PIV Card Issuance Requirements,
except that the card issuer must receive satisfactory evidence that the pseudonym is authorized by the
agency.

[^pseudonym]: See, for example, Section 10.5.7 of the Internal Revenue Service Manual (http://www.irs.gov/irm/index.html), which authorizes approval by an employee's supervisor of the use of a pseudonym to protect the employee's personal safety.

### 2.8.2 Grace Period {#s-2-8-2}

In some instances an individual's status as a Federal employee or contractor will lapse for a brief time
period. For example, a Federal employee may leave one Federal agency for another Federal agency and
thus occur a short employment lapse period, or an individual who was under contract to a Federal agency
may receive a new contract from that agency shortly after the previous contract expired. In these
instances, the card issuer MAY issue a new PIV Card without repeating the identity proofing and
registration process if the issuer has access to the applicant's chain-of-trust record and the applicant can
be reconnected to the chain-of-trust record.[^lapse]

When issuing a PIV Card under the grace period, the card issuer SHALL verify that PIV Card issuance has
been authorized by a proper authority and that the employee's or contractor's background investigation is
valid. Re-investigations SHALL be performed if required, in accordance with OPM guidance. At the time
of issuance, the card issuer SHALL perform biometric verification of the applicant to the chain-of-trust to reconnect to the chain-of-trust. The one-to-one comparison requires either a comparison of fingerprint(s) or, if unavailable, other
optional biometric data records that are available. On a positive biometric verification decision, the new PIV Card SHALL be released to the
applicant. If the biometric verification decision is negative, or if no biometric data records are available, the cardholder SHALL provide
two identity source documents (as specified in [Section 2.7](requirements.md#s-2-7)), and an attending operator SHALL inspect these
and compare the cardholder with the facial image retrieved from the enrollment data record and the facial
image printed on the new PIV Card.

[^lapse]: For the purposes of this section, a lapse is considered to be brief if it is not long enough to require that a new background investigation be performed. OPM currently requires a new background investigation to be performed when there has been a break in service of greater than two years.

## 2.9 PIV Card Maintenance Requirements {#s-2-9}

The PIV Card SHALL be maintained using processes that comply with this section.

The data and credentials held by the PIV Card may need to be updated or invalidated prior to the
expiration date of the card. The cardholder may change his or her name, retire, or change jobs; or the
employment may be terminated, thus requiring invalidation of a previously issued card. In this regard,
procedures for PIV Card maintenance must be integrated into department and agency procedures to
ensure effective card maintenance. In order to maintain operational readiness of a cardholder's PIV Card,
agencies may require PIV Card update, reissuance, or biometric enrollment more frequently than the
maximum PIV Card and biometric characteristic lifetimes stated in this Standard. Shorter lifetimes MAY be specified by
agency policy collectively, or on a case-by-case basis as sub-par operation is encountered.

### 2.9.1 PIV Card Reissuance Requirements {#s-2-9-1}

Reissuance is the process by which a new PIV Card is issued to a cardholder without the need to repeat
the entire identity proofing and registration procedure. The reissuance process may be used to replace a
PIV Card that is nearing expiration, in the event of an employee status or attribute change, or to replace a
PIV Card that has been compromised, lost, stolen, or damaged. The cardholder may also apply for
reissuance of a PIV Card if one or more logical credentials have been compromised. The entire identity
proofing, registration, and issuance process, as described in Sections [2.7](requirements.md#s-2-7) and [2.8](requirements.md#s-2-8), SHALL be repeated if the
issuer does not maintain a chain-of-trust record for the cardholder or if the reissuance process was not
started before the old PIV Card expired.

If the expiration date of the new PIV Card is later than the expiration date of the old card, or if any data
about the cardholder is being changed, the card issuer SHALL ensure that a proper authority has authorized
the issuance of the new PIV Card. The issuer SHALL ensure that the proper authority has verified that the
employee's or contractor's background investigation is valid before reissuing the card and associated
credentials.[^IDMS] If the expiration date of the new PIV Card is later than the expiration date of the old card
then re-investigations SHALL be performed if required, in accordance with OPM guidance.

The issuer SHALL perform a biometric verification of the applicant to the chain-of-trust to reconnect to the chain-of-trust. The one-to-one
comparison requires either fingerprint(s) or, if unavailable, other optional biometric data records
that are available (either on the PIV Card or in the chain-of-trust). Minimum accuracy requirements for
the biometric verification are specified in [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76). On a positive biometric verification decision, the new PIV Card SHALL be
released to the applicant. If the biometric verification decision is negative, or if no biometric data records are available, the cardholder
SHALL provide two identity source documents (as specified in [Section 2.7](requirements.md#s-2-7)), and an attending operator SHALL
inspect these and compare the cardholder with the facial image retrieved from the enrollment data record
and the facial image printed on the new PIV Card.

The old PIV Card SHALL be revoked when the new PIV Card is issued:

+ The old PIV Card SHALL be collected and destroyed, if possible.

+ Any databases maintained by the PIV Card issuer that contain FASC-N or UUID values from the old
PIV Card must be updated to reflect the change in status.

+ If the old PIV Card cannot be collected and destroyed, or if the old PIV Card has been compromised
or damaged, then the certification authority (CA) SHALL be informed and the certificates corresponding
to the PIV Authentication key and asymmetric Card Authentication key on the old PIV Card SHALL be
revoked. If present, the certificates corresponding to the digital signature key and the key
management key SHALL also be revoked.

In the case of a lost, stolen, or compromised card, normal revocation procedures SHALL be completed
within 18 hours of notification. In certain cases, 18 hours is an unacceptable delay and in those cases
emergency procedures must be executed to disseminate the information as rapidly as possible.
Departments and agencies are required to have procedures in place to issue emergency notifications in
such cases.

If there is any data change about the cardholder, the issuer will record this in the chain-of-trust, if
applicable. If the changed data is the cardholder's name, then the issuer SHALL meet the requirements in
[Section 2.9.1.1](requirements.md#s-2-9-1-1), Special Rule for Name Change by Cardholder.

Previously collected biometric data MAY be reused with the new PIV Card if the expiration date of the
new PIV Card is no later than 12 years after the date that the biometric data was obtained. As
biometric system error rates generally increase with the time elapsed since initial collection (reference aging, [[ISO2382-37]](references.md#ref-ISO/IEC-2382-37)), issuers may elect to refresh
biometric data after reconnecting the applicant to their chain-of-trust. Even if the same biometric data
is reused with the new PIV Card, the digital signature must be recomputed with the new FASC-N and
UUID.

A new PIV Authentication certificate and a new Card Authentication certificate SHALL be generated. The
corresponding certificates SHALL be populated with the new FASC-N and UUID. For cardholders who are
required to have a digital signature certificate, a new digital signature certificate SHALL also be generated.
Key management key(s) and certificate(s) MAY be imported to the new PIV Card.

#### 2.9.1.1 Special Rule for Name Change by Cardholder {#s-2-9-1-1}

Name changes frequently occur as a result of marriage, divorce, or as a matter of personal preference. In
the event that a cardholder notifies a card issuer that his or her name has changed, and presents the card
issuer with evidence of a formal name change, such as a marriage certificate, a divorce decree, judicial
recognition of a name change, or other mechanism permitted by State law or regulation, the card issuer
SHALL issue the cardholder a new card following the procedures set out in [Section 2.9.1](requirements.md#s-2-9-1), PIV Card
Reissuance Requirements. If the expiration date of the new card is no later than the expiration date of the
old PIV Card and no data about the cardholder, other than the cardholder's name, is being changed, then
the new PIV Card MAY be issued without obtaining the approval of a proper authority and without
performing a re-investigation.

### 2.9.2 PIV Card Post Issuance Update Requirements {#s-2-9-2}

A PIV Card post issuance update MAY be performed without replacing the PIV Card in cases where none
of the printed information on the surface of the card is changed. The post issuance update applies to cases
where one or more certificates, keys, biometric data records, or signed data objects are updated. A post
issuance update SHALL NOT modify the PIV Card expiration date, FASC-N, or UUID.

A PIV Card post issuance update MAY be done locally (performed with the issuer in physical custody of
the PIV Card) or remotely (performed with the PIV Card at a remote location). Post issuance updates
SHALL be performed with issuer security controls equivalent to those applied during PIV Card reissuance.
For remote post issuance updates, the following SHALL apply:

+ Communication between the PIV Card issuer and the PIV Card SHALL occur only over mutually
authenticated secure sessions between tested and validated cryptographic modules (one being the PIV
Card).

+ Data transmitted between the PIV Card issuer and PIV Card SHALL be encrypted and contain data
integrity checks.

+ The PIV Card Application will communicate with no end point entity other than the PIV Card issuer
during the remote post issuance update.

Post issuance updates to biometric data records, other than to the digital signature blocks within the
biometric data records, SHALL satisfy the requirements for verification data reset specified in [Section 2.9.3](requirements.md#s-2-9-3).

If the PIV Authentication key, asymmetric Card Authentication key, the digital signature key, or the key
management key, was compromised, the corresponding certificate SHALL be revoked.

### 2.9.3 PIV Card Verification Data Reset {#s-2-9-3}

The Personal Identification Number (PIN) on a PIV Card may need to be reset if the cardholder has
forgotten the PIN or if PIN-based cardholder authentication has been disabled from the usage of an
invalid PIN more than the allowed number of retries. A maximum of ten consecutive PIN retries SHALL be permitted unless a lower limit is stipulated by the department or agency.[^pinreset] PIN reset
may be performed in-person at an issuing facility, at an unattended kiosk operated by the issuer, or
remotely via a general computing platform:

+ When PIN reset is performed in-person at the issuing facility, before providing the reset PIV Card
back to the cardholder, the issuer SHALL perform a biometric verification to ensure that the cardholder's
biometric characteristics elicit a positive biometric verification decision when compared to biometric data records stored either on the PIV Card or in the chain-of-trust. In cases where a biometric verification is not possible, the cardholder SHALL provide the PIV Card
to be reset and another primary identity source document (as specified in [Section 2.7](requirements.md#s-2-7)). An attending
operator SHALL inspect these and compare the cardholder with the facial image retrieved from the
enrollment data record and the facial image printed on the card.

+ PIN reset at an unattended issuer-operated kiosk SHALL ensure that the PIV Card is authenticated and
that the cardholder's biometric characteristics elicit a positive biometric verification decision when compared to either the stored biometric on the PIV Card through an on-card one-to-one comparison, or biometric data records stored in the chain-of-trust through an off-card one-to-one
comparison. If the biometric verification or card authentication is unsuccessful, the kiosk SHALL NOT
reset the PIV Card.

+ Remote PIN reset on a general computing platform (e.g., desktop, laptop) SHALL only be performed if
the following requirements are met:

  * the cardholder initiates a PIN reset with the issuer operator;
  * the operator authenticates the owner of the PIV Card through an independent
  procedure; and
  * the cardholder's biometric characteristics elicit a positive biometric verification decision when compared to the stored biometric data records on the PIV Card through an on-card one-to-one comparison.

The remote PIN reset operation SHALL satisfy the requirements for remote post issuance updates
specified in [Section 2.9.2](requirements.md#s-2-9-2).

Departments and agencies may adopt more stringent procedures for PIN reset (including disallowing PIN
reset). PIN reset procedures SHALL be formally documented by each department and agency.

Regardless of the PIN reset procedure used, the chosen PIN SHALL meet the activation requirements specified in [Section 4.3.1](frontend.md#s-4-3-1).

Verification data other than the PIN may also be reset (i.e., re-enrollment) by the card issuer. Before the
reset, the issuer SHALL perform a biometric verification of the cardholder to the chain-of-trust to reconnect to the chain-of-trust.
The biometric characteristic used for the biometric verification SHALL NOT be the same as the biometric characteristic that is being
reset. For example, if fingerprint templates for on-card comparison are being reset, then an iris one-to-one comparison
could be used to reconnect to the chain-of-trust. If no alternative biometric data records are available, the
cardholder SHALL provide the PIV Card to be reset and another primary identity source document (as
specified in [Section 2.7](requirements.md#s-2-7)). An attending operator SHALL inspect these and compare the cardholder with the
facial image retrieved from the enrollment data record and the facial image printed on the PIV Card.

New verification reference data SHALL be enrolled. The PIV Card's activation methods associated with the
verification data SHALL be reset and the new verification data SHALL be stored on the card.

Departments and agencies may adopt more stringent procedures for verification data reset (including
disallowing verification data reset); such procedures SHALL be formally documented by each department
and agency.

[^pinreset]: Cardholders MAY change their PINs anytime by providing the current PIN and the new PIN values.

### 2.9.4 PIV Card Termination Requirements {#s-2-9-4}

A PIV card is terminated when the department or agency that issued the card determines that the
cardholder is no longer eligible to have a PIV Card. The PIV Card SHALL be terminated under the
following circumstances:

+ a Federal employee separates (voluntarily or involuntarily) from Federal service;

+ a contractor changes positions and no longer needs access to Federal buildings or systems;

+ a cardholder passes away;

+ a determination is made after completion of a cardholder's background investigation that the
cardholder should not have a PIV Card; or

+ a cardholder is determined to hold a fraudulent identity.


Similar to the situation in which the card or a credential is compromised, normal termination procedures
must be in place as to ensure the following:

+ The PIV Card itself is revoked:

  * The PIV Card SHALL be collected and destroyed, if possible.
  * Any databases maintained by the PIV Card issuer that indicate current valid (or invalid)
  FASC-N or UUID values must be updated to reflect the change in status.
  * If the PIV Card cannot be collected and destroyed, the CA SHALL be informed and the
  certificates corresponding to the PIV Authentication key and the asymmetric Card
  Authentication key on the PIV Card SHALL be revoked. The certificates corresponding to the
  digital signature and key management keys SHALL also be revoked, if present.

+ The PII collected from the cardholder is disposed of in accordance with the stated privacy and data
retention policies of the department or agency.

If the card cannot be collected, normal termination procedures SHALL be completed within 18 hours of
notification. In certain cases, 18 hours is an unacceptable delay and in those cases emergency procedures
must be executed to disseminate the information as rapidly as possible. Departments and agencies are
required to have procedures in place to issue emergency notifications in such cases.

## 2.10 Derived PIV Credentials {#s-2-10}

### 2.10.1 Derived PIV Credential Issuance Requirements {#s-2-10-1}

Issuance of a derived PIV credential is an instance of the post-enrollment binding of an authenticator described in [[SP 800-63B]](../_Appendix/references.md#ref-SP-800-63B) Section 6.1.2.1, *Binding of an Additional Authenticator at Existing AAL*, and SHALL be performed in accordance with the requirements of that section as they apply to physical authenticators as well as the requirements below.

Valid PIV Cards MAY be used as the basis for issuing or binding derived PIV credentials in accordance with NIST
Special Publication 800-157, *Guidelines for Derived Personal Identity Verification (PIV) Credentials*.
[[SP 800-157]](../_Appendix/references.md#ref-SP-800-157) Derived PIV credentials MAY be created at the same authentication assurance level as the PIV card itself (AAL3), or MAY be created at a lower AAL (AAL2) depending on the security characteristics of the authenticator. The issuer SHALL attempt to promptly notify the subscriber of the binding of a derived PIV credential through an independent means that would not afford an attacker with an opportunity to erase the notification. More than one independent notification method MAY be used to ensure prompt receipt by the subscriber. Derived PIV credentials SHALL be bound to the subscriber's PIV account only by the issuer of that PIV account.

### 2.10.2 Derived PIV Credential Invalidation Requirements {#s-2-10-2}

Derived PIV credentials SHALL be invalidated in any of the following circumstances:

* Upon request of the PIV cardholder as a result of loss, failure, compromise, or intent to discontinue use of the derived PIV credential

* At the determination of the PIV account issuer upon reported loss, suspected compromise, or observation of possible fraudulent activity

* When a cardholder is no longer eligible to have a PIV Card as specified in [Section 2.9.4](requirements.md#s-2-9-4). In this situation, all derived PIV credentials associated with the PIV account SHALL be invalidated.

If the derived PIV credential to be invalidated contains a Derived PIV Authentication Certificate and the corresponding private key cannot be securely zeroized or destroyed, the CA SHALL be informed and the certificate corresponding to the Derived PIV Authentication Key SHALL be revoked.

Upon invalidation of a derived PIV credential, it SHALL no longer be accepted for authentication transactions. When invalidation occurs, the issuer SHALL attempt to notify the subscriber of the change.

## 2.11 PIV Privacy Requirements {#s-2-11}

HSPD-12 explicitly states that "protect[ing] personal privacy" is a requirement of the PIV system. As
such, all departments and agencies SHALL implement the PIV system in accordance with the spirit and letter
of all privacy controls specified in this Standard, as well as those specified in Federal privacy laws and
policies including but not limited to the E-Government Act of 2002 [[E-Gov]](../_Appendix/references.md#ref-E-Gov), the Privacy Act of 1974
[[PRIVACY]](../_Appendix/references.md#ref-PRIVACY), and OMB Memorandum M-03-22 [[OMB0322]](../_Appendix/references.md#ref-OMB0322), as applicable.

Departments and agencies may have a wide variety of uses of the PIV system and its components that
were not intended or anticipated by the President in issuing [[HSPD-12]](../_Appendix/references.md#ref-HSPD-12). In considering whether a
proposed use of the PIV system is appropriate, departments and agencies SHALL consider the
aforementioned control objectives and the purpose of this Standard, namely "to enhance security, increase
Government efficiency, reduce identity fraud, and protect personal privacy" [[HSPD-12]](../_Appendix/references.md#ref-HSPD-12). No department
or agency SHALL implement a use of the identity credential inconsistent with these control objectives.

To ensure the privacy throughout PIV lifecycle, departments and agencies SHALL do the following:

- Assign an individual to the role of privacy official.[^privacyofficial] The privacy official is the individual who
    oversees privacy-related matters in the PIV system and is responsible for implementing the privacy
    requirements in the Standard. The individual serving in this role SHALL NOT assume any other
    operational role in the PIV system.

- Conduct a comprehensive Privacy Impact Assessment (PIA) on systems containing PII for the
    purpose of implementing PIV, consistent with the methodology of [[E-Gov]](../_Appendix/references.md#ref-E-Gov) and the requirements of
    [[OMB0322]](../_Appendix/references.md#ref-OMB0322). Consult with appropriate personnel responsible for privacy issues at the department or
    agency (e.g., Chief Information Officer) implementing the PIV system.
- Write, publish, and maintain a clear and comprehensive document listing the types of information that
    will be collected (e.g., transactional information, PII), the purpose of collection, what information
    may be disclosed to whom during the life of the credential, how the information will be protected, and
    the complete set of uses of the credential and related information at the department or agency.
    Provide PIV applicants full disclosure of the intended uses of the information associated with the PIV
    Card and the related privacy implications.
- Assure that systems that contain PII for the purpose of enabling the implementation of PIV are
    handled in full compliance with fair information practices as defined in [[PRIVACY]](../_Appendix/references.md#ref-PRIVACY).
- Maintain appeals procedures for those who are denied a credential or whose credentials are revoked.
- Ensure that only personnel with a legitimate need for access to PII in the PIV system are authorized to
    access the PII, including but not limited to information and databases maintained for registration and
    credential issuance.[^access]
- Coordinate with appropriate department or agency officials to define consequences for violating
    privacy policies of the PIV system.
- Assure that the technologies used in the department or agency's implementation of the PIV system
    allow for continuous auditing of compliance with stated privacy policies and practices governing the
    collection, use, and distribution of information in the operation of the program.
- Utilize security controls described in [[SP 800-53]](../_Appendix/references.md#ref-SP-800-53), Recommended Security Controls for Federal
    Information Systems, to accomplish privacy goals, where applicable.
- Ensure that the technologies used to implement PIV sustain and do not erode privacy protections
    relating to the use, collection, and disclosure of PII. Agencies may choose to deploy PIV Cards with
    electromagnetically opaque holders or other technology to protect against any unauthorized
    contactless access to information stored on a PIV Card.

[^privacyofficial]: Privacy official refers to the Senior Agency Official for Privacy (SAOP) or Chief Privacy Officer (CPO).

[^access]: Agencies may refer to NIST SP 800-122 [[SP 800-122]](../references/#ref-SP-800-122){:.footnote-ref}, *Guide to Protecting the Confidentiality of Personally Identifiable Information (PII)*, for a best practice guideline on protection of PII.
