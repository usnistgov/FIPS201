---
layout: default
title: Common Identification, Security, and Privacy Requirements
navOrder: 5
navTitle: Requirements
permalink: /requirements/
anchor: s-2
section: 2
---

# 2. Common Identification, Security, and Privacy Requirements {#s-2}

_This section is normative._ It addresses the fundamental control and security objectives outlined in [[HSPD-12]](references.md#ref-HSPD-12), including
the identity proofing requirements for federal employees and contractors.

Note that identity proofing, registration, issuance and maintenance processes outlined in this section, or portions thereof, may be outsourced by the issuer to third-party organizations or service providers. For further details on outsourcing issuer functions, refer to Section 2.2 of [[SP 800-79]](references.md#ref-SP-800-79).

## 2.1 Control Objectives {#s-2-1}

[[HSPD-12]](references.md#ref-HSPD-12) establishes control objectives for secure and reliable identification of federal employees and
contractors. These control objectives, provided in paragraph 3 of the directive, are quoted here:

> (3) "Secure and reliable forms of identification" for purposes of this directive means identification that (a)
is issued based on sound criteria for verifying an individual employee's identity; (b) is strongly resistant to
identity fraud, tampering, counterfeiting, and terrorist exploitation; (c) can be rapidly authenticated
electronically; and (d) is issued only by providers whose reliability has been established by an official
accreditation process.


Each agency's PIV implementation **SHALL** meet the control objectives listed above including, but not limited to, processes that ensure that

+ A credential is issued to an individual only after a proper authority has authorized issuance of the credential, the individual's identity has been verified, and the individual has been vetted per [Section 2.2](requirements.md#s-2-2).
+ A credential is issued only after an individual's eligibility has been favorably adjudicated
    based on the prerequisite federal investigation (See [Section 2.2](requirements.md#s-2-2)). If there 
		is no investigation meeting the investigative standards, the PIV credential eligibility may be approved 
		upon favorable initiation of the prerequisite investigation[^initiation] and once the Federal Bureau of
		Investigation (FBI) National Criminal History Check (NCHC) portion of the background investigation is
		completed and favorably adjudicated.
+ An individual is issued a credential only after presenting two identity source documents, at least one
    of which is a Federal or State Government-issued picture ID.
+ Fraudulent identity source documents are not accepted as genuine or unaltered.
+ A person suspected or known to the government as being a terrorist is not issued a credential.
+ No substitution occurs in the identity proofing process. More specifically, the individual who appears
    for identity proofing and whose fingerprints are checked against databases is the person to whom the
    credential is issued.
+ No credential is issued unless requested by the proper authority.
+ A credential remains serviceable only up to its expiration date.
+ A process exists to invalidate, revoke, or destroy credentials when the cardholder loses eligibility or when the credential is lost, stolen, or compromised.
+ A single corrupt official in the process cannot issue a credential with an incorrect identity or to a
    person not entitled to the credential.
+ An issued credential is not duplicated or forged.
+ An issued credential is not modified by an unauthorized entity.

[^initiation]: See [[CSP]](../references/#ref-CSP) for details about the investigation initiation process.

## 2.2 Credentialing Requirements {#s-2-2}

Federal departments and agencies **SHALL** use the credentialing eligibility standards issued by the Director of the Office
of Personnel Management (OPM)[^OPM] and OMB.[^OMB]

Federal departments and agencies must follow investigative requirements established by the Suitability and Credentialing Executive Agent and the Security Executive Agent. Departments and agencies **SHALL** use position designation guidance issued by the Executive Agents. The designation of the position determines the prerequisite investigative requirement. Individuals being processed for a PIV Card **SHALL** receive the required investigation and are subject to any applicable reinvestigation or continuous vetting requirements to maintain their PIV eligibility.

The minimum requirement for PIV Credential eligibility determination is a completed and favorably adjudicated Tier 1 investigation, formerly called a National Agency Check with Written Inquiries (NACI).[^TierOne]

For individuals for whom no prior investigation exists, the appropriate required investigation **SHALL** be initiated with the authorized federal investigative service provider and the FBI NCHC portion of the background investigation **SHALL** be completed and favorably adjudicated prior to PIV Card issuance.

Once the investigation is completed, the authorized adjudicative entity **SHALL** adjudicate the investigation and report the final eligibility determination to the Central Verification System (or successor) and, if applicable, their enrollment in the Continuous Vetting Program as defined in [[EO 13764]](references.md#ref-EO-13764). This determination **SHALL** be recorded in or referenced by the PIV enrollment record to reflect PIV eligibility for the PIV cardholder.

For full guidance on PIV credentialing investigative and adjudicative requirements, to include continuous vetting, issuers must work closely with their personnel security/suitability offices to ensure adherence to the latest federal personnel vetting guidance as provided by the Executive Agents. 


[^OPM]: For example, [[FCS]](../references/#ref-FCS) and [[CSP]](../references/#ref-CSP) or subsequent standards.

[^OMB]: For example, OMB [[M-05-24]](../references/#ref-OMB0524).

[^TierOne]: NACI investigations were replaced with Tier 1 investigations upon implementation of the 2012 Federal Investigative Standards.


## 2.3 Biometric Data Collection for Background Investigations {#s-2-3}

This section applies to applicants that do not have a completed and favorably adjudicated Tier 1 or higher federal background investigation on record that can be located and referenced.

A full set of fingerprints **SHALL** be collected from each PIV applicant who is lacking an on-record background investigation. 

Biometric identification using fingerprints is the primary input to law
enforcement checks. In cases where ten fingerprints are not available, then as many fingers as
possible **SHALL** be imaged as per guidance in [[SP 800-76]](references.md#ref-SP-800-76). In cases where no fingers are available to be imaged, agencies **SHALL** seek guidance from their respective investigative service provider for alternative means of performing law enforcement checks.

Fingerprint collection **SHALL** conform to the procedural and technical specifications of [[SP 800-76]](references.md#ref-SP-800-76).

## 2.4 Biometric Data Collection for PIV Card {#s-2-4}

The following biometric data **SHALL** be collected from each PIV applicant:

+ Two fingerprints for off-card one-to-one comparison. These fingerprints **MAY** be taken from the full set of fingerprints
    collected in [Section 2.3](requirements.md#s-2-3).
+ An electronic facial image.

The following biometric data **MAY** be collected from a PIV applicant:

+ An electronic image of the left iris.
+ An electronic image of the right iris.
+ Two fingerprints for on-card comparison (OCC). These fingerprints **MAY** be taken from the full set of fingerprints collected in [Section 2.3](requirements.md#s-2-3) and **SHOULD** be imaged from fingers not imaged for off-card one-to-one comparison.

If the identity proofing and enrollment process is performed over multiple visits, an automated biometric verification attempt comparing the applicant's newly captured biometric characteristics against biometric data collected during a previous visit **SHALL** be performed at each visit and return a positive verification decision.

If biometric data was collected as specified in [Section 2.3](requirements.md#s-2-3) and if collection of biometric data as specified in this section and in [Section 2.3](requirements.md#s-2-3) occur on separate
occasions, a biometric comparison **SHALL** be performed to confirm that the two fingerprints collected for off-card one-to-one comparisons elicit a positive biometric verification decision when compared to the same two fingerprints from the original set of ten fingerprints.

Biometric data collection **SHALL** conform to the procedural and technical specifications of [[SP 800-76]](references.md#ref-SP-800-76).
The choice of fingers to use for mandatory fingerprint templates and optional fingerprint templates **MAY** vary between persons. The recommended
selection and order is specified in [[SP 800-76]](references.md#ref-SP-800-76).

## 2.5 Biometric Data Use {#s-2-5}

The full set of fingerprints **SHALL** be collected for biometric identification against databases of fingerprints
maintained by the FBI.

The two mandatory fingerprints **SHALL** be used for the preparation of biometric templates to be stored on the PIV Card as
described in [Section 4.2.3.1](frontend.md#s-4-2-3-1). The fingerprints provide an interoperable authentication
mechanism through an off-card comparison scheme (BIO or BIO-A) as described in [Section 6.2.1](authentication.md#s-6-2-1). These fingerprints are also
the primary means of authentication during PIV issuance and maintenance processes.

The optional fingerprints **MAY** be used for the preparation of biometric templates for OCC
as described in [Section 4.2.3.1](frontend.md#s-4-2-3-1). OCC **MAY** be used for PIV issuance and maintenance processes as applicable, card activation as described in 
[Section 4.3.1](frontend.md#s-4-3-1), and cardholder authentication (OCC-AUTH) as described in [Section 6.2.2](authentication.md#s-6-2-2).

Agencies **MAY**
choose to collect electronic iris images as an additional biometric characteristic. If collected,
the electronic iris images **SHALL** be stored on the PIV Card as described in [Section 4.2.3.1](frontend.md#s-4-2-3-1).
The images **MAY** be used for cardholder authentication (BIO or BIO-A) as described in [Section 6.2.1](authentication.md#s-6-2-1).
Electronic iris images are an additional means of authentication during PIV issuance and maintenance processes.

The electronic facial image **SHALL** be stored on the PIV Card as described in [Section 4.2.3.1](frontend.md#s-4-2-3-1).
It **SHALL** be printed on the PIV Card according to [Section 4.1.4.1](frontend.md#s-4-1-4-1). 
The image **MAY** be used for cardholder authentication (BIO or BIO-A) as described in [Section 6.2.1](authentication.md#s-6-2-1).
It **MAY** be retrieved and displayed on guard workstations to augment 
other authentication processes from [Section 6.2](authentication.md#s-6-2).
The electronic facial image is an additional means of authentication during PIV issuance and maintenance processes when used with an automated facial comparison algorithm.

PIV background investigation, identity proofing, registration, and issuance processes **MAY** be performed across multiple sessions at different facilities. If multiple sessions are needed, the applicant **SHALL** be linked through a positive biometric verification decision obtained from an automated comparison of biometric characteristics captured at a previous session to biometric characteristics captured during the current session. Issuers **SHALL** follow applicable federal laws and regulations regarding the retention and destruction of biometric data.

For linking to background investigations, only fingerprints **SHALL** be used, since fingerprints are the only biometric characteristic used for background investigations.  For all other purposes, verification attempts **MAY** be performed against any available biometric characteristic stored electronically on the PIV Card or in the enrollment record.

## 2.6 PIV Enrollment Records {#s-2-6}

> Note: This section was formerly entitled "Chain-of-Trust".

The card issuer **SHALL** maintain the enrollment record for each issued PIV Card.
These enrollment records are created and maintained through the methods of 
contemporaneous acquisition at each step of the PIV issuance process&mdash;typically including identity proofing, registration, 
and biometric enrollment.

PIV enrollment records **SHALL** maintain an auditable sequence of enrollment events to facilitate binding an applicant 
to multiple transactions that might take place at different times and locations.[^fingerprints] These records are generally stored as part of the cardholder's PIV identity account, either as part of the issuer's IDMS or through links to records in other related systems (e.g., card management systems).

[^fingerprints]: For example, ten fingerprints for law enforcement checks may be collected at one time and place, and two fingerprints for PIV Card templates may be collected at a later time and different place, provided that a biometric comparison confirms that the two fingerprints belong to the original set of ten fingerprints. 

PIV enrollment records **SHOULD** include the following data:

+ A log of activities that documents who took the action, what action was taken, when and where the
    action took place, and what data was collected.
+ An enrollment data record that contains the most recent collection of each of the biometric data
    collected. The enrollment data record describes the circumstances of biometric acquisition including
    the name and role of the acquiring agent, the office and organization, time, place, and acquisition
    method. The enrollment data record **MAY** also document unavailable biometric data or failed attempts
    to collect biometric data. The enrollment data record **MAY** contain historical biometric data records.
+ Unique identifiers issued to the individual, such as the Federal Agency Smart Credential Number (FASC-N),
    the cardholder Universally Unique Identifier (UUID), and the card UUID. The record **MAY** contain historical
    unique identifiers.
+ Information about the authorizing entity that has approved the issuance of a credential.
+ Current status of the background investigation, including the results of the investigation once
    completed.
+ The evidence of authorization if the credential is issued under a pseudonym.
+ Any data about the cardholder, including subsequent changes in the data (e.g., cardholder name changes per [Section 2.9.1.1](requirements.md#s-2-9-1-1)).

The biometric data records in the PIV enrollment records **SHALL** be valid for a maximum of 12&nbsp;years. In order to mitigate aging
effects and thereby maintain operational readiness of a cardholder's PIV Card, agencies **MAY** require
biometric enrollment more frequently than 12&nbsp;years.

PIV enrollment records contain Personally Identifiable Information (PII). PII **SHALL** be protected
in a manner that protects the individual's privacy and maintains the integrity of the records
both in transit and at rest. 

PIV enrollment records can be applied in several situations, including the following:

Extended enrollment
: A PIV applicant enrolls a full set of fingerprints for background investigations
    at one place and time and two fingerprints for the PIV Card at another place and time. The enrollment record would contain identifiers and two enrollment data records: one with the full set of fingerprint images collected for background investigations and one with two fingerprint templates collected for the PIV Card. The two fingerprint templates would be compared
    to the corresponding fingers in the ten-fingerprint data set in the PIV enrollment record.

Reissuance of lost card
: Since the card issuer has biometric data
    records from enrollment, the cardholder can perform a biometric comparison against the biometric data stored in the PIV enrollment record. 
    The card issuer **NEED NOT** repeat the identity proofing and registration process on a positive biometric verification decision. Instead, the card issuer 
    revokes the lost card and proceeds to issue a new card as described in [Section 2.9.1](requirements.md#s-2-9-1).

Interagency transfer
: A federal employee is transferred from one agency to another. When the
    employee leaves the old agency, they surrender their PIV Card and it is destroyed. When the
    employee arrives at the new agency and is processed in, the card issuer in the new agency requests and receives the
    employee's PIV enrollment record from the card issuer in the old agency in a secure manner. The
    employee performs a biometric comparison against the biometric data stored in this record, and the interaction proceeds as
    described in [Section 2.8.2](requirements.md#s-2-8-2).

To facilitate interagency transfer of enrollment data, systems may import and export enrollment records in the manner and
representation described in [[SP 800-156]](references.md#ref-SP-800-156).

## 2.7 PIV Identity Proofing and Registration Requirements {#s-2-7}

Identity proofing and registration requirements for the issuance of PIV Cards meet Identity Assurance Level (IAL) 3 since they follow a tailored process based on [[SP 800-63A]](references.md#ref-SP-800-63A) IAL3 requirements. Departments and agencies **SHALL** follow an identity proofing and registration process that meets the requirements defined below when issuing PIV Cards.

The department or agency **SHALL** adopt and use an identity proofing and registration process that is approved in
accordance with [[SP 800-79]](references.md#ref-SP-800-79).

The department or agency **SHALL** follow investigative requirements as outlined in [Section 2.2](requirements.md#s-2-2).

Biometric data **SHALL** be captured as specified in [Section 2.3](requirements.md#s-2-3) and [Section 2.4](requirements.md#s-2-4).

The applicant **SHALL** appear in person at least once before the issuance of a PIV Card, either at the issuing facility or at a supervised remote identity proofing station (as described in [Section 2.7.1](requirements.md#s-2-7-1)).

During identity proofing, the applicant **SHALL** be required to provide two original forms of identity source
documents.[^documents] These documents **SHALL** be validated to ensure that they are genuine and authentic, not counterfeit, fake, or forgeries. Validation of physical security features **SHALL** be performed by trained staff. When they are available, cryptographic security features **SHOULD** be used to validate evidence.[^cryptoValidate] The identity source documents **SHALL** relate to the applicant. The identity source documents **SHALL NOT**
be expired or cancelled. If the two identity source documents bear different names, evidence
of a formal name change **SHALL** be provided. At least one identity source document **SHALL** meet the requirements of Strong evidence as specified in [[SP 800-63A]](references.md#ref-SP-800-63A) and be one of the
following forms of identification:

[^cryptoValidate]: For example, digital identity evidence signed by the issuing authority can be cryptographically verified (e.g., MRZ signature validation of passports).

* U.S. Passport or a U.S. Passport Card
* driver's license or ID card that is compliant with [[REAL-ID]](references.md#ref-REAL-ID) requirements described in this section
* Permanent Resident Card or Alien Registration Receipt Card (Form I-551)
* foreign passport
* Employment Authorization Document that contains a photograph (Form I-766)
* U.S. Military ID card
* U.S. Military dependent's ID card
* PIV Card
    
The second piece of evidence **MAY** be from the list above, but it **SHALL NOT** be of the same type
as the primary identity source document.[^second] The second identity source document **MAY** also be one
of the following:

* ID card issued by a federal, state, or local government agency or entity, provided that it
    contains a photograph
* voter's registration card
* U.S. Coast Guard Merchant Mariner Card
* Certificate of U.S. Citizenship (Form N-560 or N-561)
* Certificate of Naturalization (Form N-550 or N-570)
* U.S. Citizen ID Card (Form I-197)
* Identification Card for Use of Resident Citizen in the United States (Form I-179)
* Certification of Birth Abroad or Certification of Report of Birth issued by the Department
    of State (Form FS-545 or Form DS-1350)
* Reentry Permit (Form I-327)
* Employment authorization document issued by the Department of Homeland Security (DHS)
* driver's license issued by a Canadian government entity
* Native American tribal document
* U.S. Social Security Card issued by the Social Security Administration
* original or certified copy of a birth certificate issued by a state, county, municipal
    authority, possession, or outlying possession of the United States bearing an official seal
* another piece of evidence that meets the requirements of Fair evidence specified in [[SP 800-63A]](references.md#ref-SP-800-63A)

> Note: One piece of Strong evidence and one other piece of evidence meeting the requirements of Fair evidence in [[SP 800-63A]](references.md#ref-SP-800-63A) are considered sufficient for issuance of a PIV Card because the requirement for a federal background investigation is considered a compensating control for identity proofing at IAL3. Similarly, the federal background investigation requirement is considered a compensating control for the SP 800-63A requirement to validate evidence by comparison of details with the issuing or authoritative sources.

Departments and agencies **SHALL** ensure that driver's licenses and ID cards presented by applicants comply with [[REAL-ID]](references.md#ref-REAL-ID) when required pursuant to DHS regulations. State-issued driver's licenses and ID cards that are not [[REAL-ID]](references.md#ref-REAL-ID) compliant **MAY** be used until the full enforcement date under [[6 CFR &sect; 37.5]](references.md#ref-6CFR37).

The PIV identity proofing, registration, issuance, and reissuance processes **SHALL** adhere to the
principle of separation of duties to ensure that no single individual has the capability to issue a PIV
Card without the cooperation of another authorized person.

The identity proofing and registration process used when verifying the identity of the applicant **SHALL** be
accredited by the department or agency as satisfying the requirements above and approved in writing by
the head or deputy (or equivalent) of the federal department or agency.

The requirements for identity proofing and registration also apply to citizens of foreign countries who are
working for the U.S. Federal Government overseas. However, a process for identity proofing and registration
**SHALL** be established using a method approved by the U.S. Department of State's Bureau of Diplomatic
Security, except for employees under the command of a U.S. area military commander. These procedures
vary depending on the country.

[^NAC]: The NAC is an automated record check.

[^documents]: Departments and agencies may choose to accept only a subset of the identity source documents listed in this section. For example, in cases where identity proofing for PIV Card issuance is performed prior to verification of employment authorization, departments and agencies may choose to require the applicant to provide identity source documents that satisfy the requirements of Form I-9, *Employment Eligibility Verification*, in addition to the requirements specified in this section.

[^second]: For example, if the first source document is a foreign passport (e.g., Italy), the second source document cannot be another foreign passport (e.g., France).

### 2.7.1 Supervised Remote Identity Proofing {#s-2-7-1}

Departments and agencies **MAY** use a supervised remote identity proofing process for the identity proofing of PIV Card applicants. This process involves the use of an issuer-controlled station at a remote location that is connected to a trained operator at a central location. The goal of this arrangement is to permit identity proofing and enrollment of individuals in remote locations where it is not practical for them to travel to the agency for in-person identity proofing.

Supervised remote identity proofing takes advantage of improvements in sensor technology (e.g., cameras and biometric capture devices) and communications bandwidth to closely duplicate the security of in-person identity proofing. This is done through the use of specialized equipment to support an enrollment station that is under the control of either the issuer or a third party that is trusted by the issuer.

The following forms of protection **SHALL** be provided by either inherent capabilities of the station or staff at the station location:

* ensuring that only the applicant interacts with the station during any session;
* ensuring that the physical integrity of the station (e.g., door locks and restricted access) and integral nature of its sensor devices (e.g., fingerprint readers and cameras) are maintained at all times to protect against tampering, removal, or replacement; 
* ensuring that no malicious code[^malicious] is introduced to compromise or otherwise impair the station and the PIV Card; and
* reporting any problems with the station to the issuer.

Supervised remote identity proofing **SHALL** meet the following requirements:

* The station **SHALL** be maintained in a controlled-access environment and **SHALL** be monitored by staff at the station location while it is being used.[^controlled]
* The issuer **SHALL** have a live operator participate remotely with the applicant for the entirety of the identity proofing session.
* The issuer **SHALL** require operators to have undergone a training program to detect potential fraud and to properly perform a supervised remote identity proofing session.
* The operator **SHALL** monitor the entire identity proofing session&mdash;from which the applicant **SHALL NOT** depart&mdash;by at least one continuous, high-resolution video transmission of the applicant.
* The operator **SHALL** require all actions taken by the applicant during the identity proofing session to be clearly visible to the operator.
* The operator **SHALL** validate the physical or cryptographic security features of primary and secondary identity source documents using scanners and sensors that are integrated into the station.
* The issuer **SHALL** ensure that all communications occur over a mutually authenticated protected channel.

If biometric data cannot be collected per the criteria defined in [[SP 800-76]](references.md#ref-SP-800-76) or if validation of the identity evidence is inadequate, supervised remote identity proofing **SHALL NOT** be used and the identity proofing and enrollment will be performed in person at the issuer's facility.
The trained operator **SHALL** terminate a supervised remote identity proofing
session and require in-person identity proofing at an issuing facility if
there is reasonable basis to believe[^believe] that the applicant is attempting
to bypass protection capabilities of the station. 

[^controlled]: A controlled-access environment is a location with limited egress points where staff can see the station while performing other duties.

[^believe]: A reasonable basis to believe occurs when a disinterested observer with knowledge of the same facts and circumstances would reasonably reach the same conclusion.

[^malicious]: Security practices to mitigate malicious code threats are outside the scope of this document (see [[SP 800-53]](../references/#ref-SP-800-53) for a catalog of security and privacy controls for federal information systems).

## 2.8 PIV Card Issuance Requirements {#s-2-8}

Departments and agencies **SHALL** meet the requirements defined below when issuing PIV Cards. The
issuance process used when issuing PIV Cards **SHALL** be accredited by the department or agency as
satisfying the requirements below and approved in writing by the head or deputy (or equivalent)
of the federal department or agency.

+ PIV Cards **SHALL** be issued only after the adjudicative entity has authorized issuance of the credential.
+ The department or agency **SHALL** use an approved PIV credential issuance process in accordance with
    [[SP 800-79]](references.md#ref-SP-800-79).
+ Before issuing the PIV Card, the issuer **SHALL** ensure that the individual receiving it has been properly processed per [Section 2.1](requirements.md#s-2-1), [Section 2.2](requirements.md#s-2-2), and [Section 2.7](requirements.md#s-2-7).
+ Biometric data used to personalize the PIV Card **SHALL** be those captured during the identity proofing and registration process.
+ During the issuance process, the issuer **SHALL** verify that the individual to whom the PIV Card is to be
    issued is the same as the intended applicant/recipient as approved by the appropriate authority.
    Before the PIV Card is provided to the applicant, the issuer **SHALL** perform a one-to-one comparison of the
    applicant against biometric data records available on the PIV Card or in the PIV enrollment record.
    Minimum accuracy requirements for biometric verification and presentation attack detection are specified in [[SP 800-76]](references.md#ref-SP-800-76). On
    a positive biometric verification decision, the PIV Card **SHALL** be released to the applicant. If the biometric verification decision is negative, or if
    no biometric data records are available, the cardholder **SHALL** provide two identity source documents (as
    specified in [Section 2.7](requirements.md#s-2-7)), and an attending operator **SHALL** inspect these and compare the cardholder
    with the photograph printed on the PIV Card.
+ The department or agency **SHALL** issue PIV credentials only through systems and providers whose reliability has
    been established by the agency and so documented and approved in writing (i.e., accredited) in
    accordance with [[SP 800-79]](references.md#ref-SP-800-79).
+ The PIV Card **SHALL** be valid for no more than six years.

PIV Cards that contain topographical defects (e.g., scratches, poor color, fading, etc.) or that are not
properly printed **SHALL** be destroyed. The PIV Card issuer is responsible for the card stock, its
management, and its integrity.


### 2.8.1 Special Rule for Pseudonyms {#s-2-8-1}

In limited circumstances, federal employees and contractors are permitted to use pseudonyms during the
performance of their official duties with the approval of their employing agency. If an agency determines
that the use of a pseudonym is necessary[^pseudonym] to protect an employee or contractor (e.g., from physical harm,
severe distress, or harassment), the agency may formally authorize the issuance of a PIV Card to the
employee or contractor using the agency-approved pseudonym. The issuance of a PIV Card using an
authorized pseudonym **SHALL** follow the procedures in [Section 2.8](requirements.md#s-2-8)
except that the card issuer **SHALL** receive satisfactory evidence that the pseudonym is authorized by the
agency.

[^pseudonym]: An example can be seen in Section 10.5.7 of the Internal Revenue Service Manual (<https://www.irs.gov/irm/part10/irm_10-005-007>), which authorizes approval by an employee's supervisor of the use of a pseudonym to protect the employee's personal safety.

### 2.8.2 Grace Period {#s-2-8-2}

In some instances, an individual's status as a federal employee or contractor will lapse for a brief time
period. For example, a federal employee may leave one federal agency for another federal agency and
thus incur a short employment lapse period, or an individual who was under contract to a federal agency
may receive a new contract from that agency shortly after the previous contract expired.[^lapse] In these
instances, the card issuer **MAY** issue a new PIV Card without repeating the identity proofing and
registration process if the issuer can obtain the applicant's PIV enrollment record containing biometric data 
records from the issuer of the applicant's previous PIV Card.

When issuing a PIV Card under the grace period, the card issuer **SHALL** verify that PIV Card issuance has
been authorized by a proper authority and that the employee or contractor's background investigation is
valid. Re-investigations **SHALL** be performed, if required, in accordance with the federal investigative standards. At the time
of issuance, the card issuer **SHALL** perform biometric verification of the applicant to the biometric data records in 
the applicant's previous PIV enrollment record.
On a positive biometric verification decision, the new PIV Card **SHALL** be released to the
applicant. If the biometric verification decision is negative, or if no biometric data records are available, the cardholder **SHALL** provide
two identity source documents (as specified in [Section 2.7](requirements.md#s-2-7)), and an attending operator **SHALL** inspect these
and compare the cardholder with the electronic facial image retrieved from the enrollment data record and the photograph
printed on the new PIV Card.

[^lapse]: For the purposes of this section, a lapse is considered to be brief if it is not long enough to require that a new or updated background investigation be performed consistent with Executive Agents' guidance. 

### 2.8.3 Remote Issuance {#s-2-8-3}

Departments and agencies **MAY** use a supervised remote identity proofing station as described in [Section 2.7.1](requirements.md#s-2-7-1) for the processes involved in the issuance of PIV Cards. This involves the use of an issuer-controlled station at a remote location that is connected to a trained operator at a central location. The goal of this arrangement is to permit issuance to individuals in remote locations where it is not practical for them to travel to the agency for in-person issuance of their PIV credential.

Remote issuance **SHALL** satisfy all of the requirements of [Section 2.8](requirements.md#s-2-8). The issuer **SHALL** have local trained staff to securely maintain custody of card stock received by the remote station when the station is used for PIV Card issuance.

If biometric data cannot be positively verified per the criteria defined in [[SP 800-76]](references.md#ref-SP-800-76), remote issuance **SHALL NOT** be used and issuance will be performed in person at the issuer's facility.
The trained operator **SHALL** terminate a remote issuance
session and require in-person issuance at an issuing facility if
there is reasonable basis to believe[^believe] that the applicant is attempting
to bypass protection capabilities of the station.

## 2.9 PIV Card Maintenance Requirements {#s-2-9}

The PIV Card **SHALL** be maintained using processes that comply with this section.

The data and credentials held by the PIV Card may need to be updated or invalidated prior to the
expiration date of the card. For example, a previously issued PIV Card needs to be invalidated when
the cardholder changes their name or employment status. In this regard,
procedures for PIV Card maintenance must be integrated into department and agency procedures to
ensure effective card maintenance. In order to maintain operational readiness of a cardholder's PIV Card,
agencies may require PIV Card update, reissuance, or biometric enrollment more frequently than the
maximum PIV Card and biometric characteristic lifetimes stated in this Standard. Shorter lifetimes **MAY** be specified by
agency policy.

### 2.9.1 PIV Card Reissuance Requirements {#s-2-9-1}

Reissuance is the process by which a new PIV Card is issued to a cardholder without the need to repeat
the entire identity proofing and registration process. The reissuance process may be used to replace a
PIV Card that is nearing expiration, in the event of an employee status or attribute change, or to replace a
PIV Card that has been compromised, lost, stolen, or damaged. The cardholder may also apply for
reissuance of a PIV Card if one or more logical credentials have been compromised. The identity
proofing, registration, and issuance processes, as described in [Section 2.7](requirements.md#s-2-7) and [Section 2.8](requirements.md#s-2-8), **SHALL** be repeated if the 
issuer does not maintain a PIV enrollment record that includes biometric data records for the cardholder. 

If the expiration date of the new PIV Card is later than the expiration date of the old card, or if any data
about the cardholder is being changed, the card issuer **SHALL** ensure that an adjudicative entity has authorized
the issuance of the new PIV Card. The issuer **SHALL** ensure that the adjudicative entity has verified that there is a PIV eligibility determination in an authoritative record, such as the agency's IDMS or the Central Verification System (or successor).

The issuer **SHALL** perform a biometric verification of the applicant to the biometric data records of the PIV enrollment record or to the biometric data records of the PIV Card using the BIO-A or OCC-AUTH authentication mechanisms. Minimum accuracy requirements for
the biometric verification are specified in [[SP 800-76]](references.md#ref-SP-800-76). On a positive biometric verification decision, the new PIV Card **SHALL** be
released to the applicant. If the biometric verification decision is negative, or if no biometric data records are available, the cardholder
**SHALL** provide two identity source documents (as specified in [Section 2.7](requirements.md#s-2-7)), and an attending operator **SHALL**
inspect these and compare the cardholder with the electronic facial image retrieved from the enrollment data record
and the photograph printed on the new PIV Card.

The old PIV Card **SHALL** be revoked when the new PIV Card is issued. The revocation process **SHALL** include the following:

+ The old PIV Card **SHALL** be collected and destroyed, if possible.
+ Any databases maintained by the PIV Card issuer that contain FASC-N or card UUID values from the old
    PIV Card must be updated to reflect the change in status.
+ If the old PIV Card cannot be collected and destroyed, or if the old PIV Card has been compromised
    or damaged, then the Certification Authority (CA) **SHALL** be informed and the certificates corresponding
    to the PIV authentication key ([Section 4.2.2.1](frontend.md#s-4-2-2-1)) and asymmetric card authentication key ([Section 4.2.2.2](frontend.md#s-4-2-2-2)) on the old PIV Card **SHALL** be
    revoked. If present, the certificates corresponding to the digital signature key ([Section 4.2.2.1](frontend.md#s-4-2-2-4)) and the key
    management key ([Section 4.2.2.5](frontend.md#s-4-2-2-5)) **SHALL** also be revoked.

In the case of a lost, stolen, or compromised card, normal revocation procedures **SHALL** be completed
within 18&nbsp;hours of notification. In certain cases, 18&nbsp;hours is an unacceptable delay, and in those cases
emergency procedures **SHOULD** be executed to disseminate the information as rapidly as possible.

If there is any data change about the cardholder, the issuer **SHALL** record this data change in the PIV enrollment record, if
applicable. If the changed data is the cardholder's name, then the issuer **SHALL** meet the requirements in
[Section 2.9.1.1](requirements.md#s-2-9-1-1).

Previously collected biometric data **MAY** be reused with the new PIV Card if the expiration date of the
new PIV Card is no later than 12&nbsp;years after the date that the biometric data was obtained. As
biometric system error rates generally increase with the time elapsed since initial collection (reference aging, [[ISO 2382-37]](references.md#ref-ISO/IEC-2382-37)), issuers **MAY** refresh
biometric data in the PIV enrollment record during the re-issuance process. Even if the same biometric data
is reused with the new PIV Card, the digital signature must be recomputed with the new FASC-N and
card UUID.

A new PIV authentication certificate and a new card authentication certificate **SHALL** be generated. The
corresponding certificates **SHALL** be populated with the new FASC-N and card UUID. For cardholders with government-issued email accounts, the digital signature and key management keys and associated certificates **SHALL** be populated. A new digital signature key and associated certificate **SHALL** be generated on the new PIV Card, while 
key management keys and associated certificates **MAY** be imported to the new PIV Card.

#### 2.9.1.1 Special Rule for Name Change by Cardholder {#s-2-9-1-1}

Name changes frequently occur as a result of marriage, divorce, or as a matter of personal preference. In
the event that a cardholder notifies the card issuer that their name has changed and presents the card
issuer with evidence of a formal name change&mdash;such as a marriage certificate, a divorce decree, judicial
recognition of a name change, or other mechanism permitted by state law or regulation&mdash;the card issuer
**SHALL** issue the cardholder a new card following the procedures set out in [Section 2.9.1](requirements.md#s-2-9-1)
and notify the respective adjudicative entity of the name change to ensure that appropriate records are updated. If the expiration date of the new card is no later than the expiration date of the
old PIV Card and no data about the cardholder other than the cardholder's name is being changed, then
the new PIV Card **MAY** be issued without obtaining the approval of the adjudicative entity and without
performing a re-investigation.

### 2.9.2 PIV Card Post-Issuance Update Requirements {#s-2-9-2}

A PIV Card post-issuance update **MAY** be performed without replacing the PIV Card in cases where none
of the printed information on the surface of the card is changed. The post-issuance update applies to cases
where one or more certificates, keys, biometric data records, or signed data objects are updated. A post-issuance
update **SHALL NOT** modify the PIV Card expiration date, FASC-N, card UUID, or cardholder UUID.

A PIV Card post-issuance update **MAY** be done locally (i.e., performed with the issuer in physical custody of
the PIV Card) or remotely (i.e., performed with the PIV Card at a remote location). Post-issuance updates
**SHALL** be performed with issuer security controls equivalent to those applied during PIV Card reissuance.
For remote post-issuance updates, the following **SHALL** apply:

+ Communication between the PIV Card issuer and the PIV Card **SHALL** occur only over mutually
    authenticated secure sessions between tested and validated cryptographic modules (one being the PIV
    Card).
+ Data transmitted between the PIV Card issuer and PIV Card **SHALL** be encrypted and contain data
    integrity checks.
+ The PIV Card application **SHALL** communicate with no endpoint entity other than the PIV Card issuer
    during the remote post-issuance update.

Post-issuance updates to biometric data records, other than to the digital signature blocks within the
biometric data records, **SHALL** satisfy the requirements for PIV Card activation reset specified in [Section 2.9.3](requirements.md#s-2-9-3).

If the PIV authentication key ([Section 4.2.2.1](frontend.md#s-4-2-2-1)), asymmetric card authentication key ([Section 4.2.2.2](frontend.md#s-4-2-2-2)), digital signature key ([Section 4.2.2.1](frontend.md#s-4-2-2-4)), or key
management key ([Section 4.2.2.5](frontend.md#s-4-2-2-5)) was compromised, the corresponding certificate **SHALL** be revoked.

### 2.9.3 PIV Card Activation Reset {#s-2-9-3}

Both the Personal Identification Number (PIN) and OCC activation methods for a PIV Card
can be reset in certain circumstances.

The PIN on a PIV Card may need to be reset if the cardholder has
forgotten the PIN or if PIN-based cardholder authentication has been disabled by the usage of an
invalid PIN more than the allowed number of retries. Fingers might need to be re-enrolled for OCC if the cardholder has experienced epidermal scarring or similar physical changes, resulting in false negative biometric verification decisions, or if OCC has been disabled by exceeding the allowed number of negative biometric verification decisions. No more than 10 consecutive activation retries for each of the activation methods (i.e., PIN and OCC attempts) **SHALL** be permitted. Card issuers **MAY** further restrict the maximum retry limit to a lower value.

Cardholders **MAY** change their PINs at any time by providing the current PIN and the new PIN values, as specified in [[SP 800-73]](references.md#ref-SP-800-73).

Departments and agencies **MAY** adopt more stringent procedures for PIN or OCC
reset (including disallowing resets); such procedures **SHALL** be formally
documented by each department and agency.

#### 2.9.3.1 PIN Reset {#s-2-9-3-1}

PIN reset **MAY** be performed in person at an issuing facility, at a kiosk operated by the issuer,
remotely via a general computing platform, or at a supervised remote identity proofing station:

In person
: When PIN reset is performed in person at the issuing facility, before providing the reset PIV Card
    back to the cardholder, the issuer **SHALL** perform a biometric verification to ensure that the cardholder's
    biometric characteristics elicit a positive biometric verification decision when compared to biometric data records stored in the PIV enrollment record or when compared to the biometric data records on the PIV Card using the BIO-A or OCC-AUTH authentication mechanisms. In cases where a negative biometric verification decision is returned or the cardholder's biometric characteristics are not successfully acquired, the cardholder **SHALL** provide
    another primary identity source document (as specified in [Section 2.7](requirements.md#s-2-7)). An attending
    operator **SHALL** inspect the identity document and compare the cardholder with the electronic facial image retrieved from the
    enrollment data record and the photograph printed on the card.

Issuer-operated kiosk
: PIN reset at an issuer-operated kiosk **SHALL** ensure that the PIV Card is authenticated and
    that the cardholder's biometric characteristics elicit a positive biometric verification decision when compared to biometric data records stored in the PIV enrollment record or when compared to the biometric data records on the PIV Card using the OCC-AUTH authentication mechanism. In cases where a negative biometric verification decision is returned, the cardholder's biometric characteristics are not successfully acquired, or card authentication is unsuccessful, the kiosk **SHALL NOT**
    reset the PIV Card. The session **SHALL** be terminated and the PIN reset **SHALL** be performed in person at the issuing facility or at a supervised remote identity proofing station.
    The kiosk **MAY** be unattended while used for PIN reset operations.

Supervised remote identity proofing station
: PIN reset at a supervised remote identity proofing station combines the assurance
    of an in-person reset with the convenience of a kiosk reset. All protections
    and requirements of [Section 2.7.1](requirements.md#s-2-7-1) **SHALL** be observed during the
    procedure. The operator **SHALL** initiate a biometric verification to ensure that
    the cardholder's biometric characteristics captured at the station elicit a
    positive biometric verification decision when compared to biometric data
    records stored in the PIV enrollment record or when compared to the biometric data records on the PIV Card using the OCC-AUTH authentication mechanism. In
    cases where a negative biometric verification decision is returned or the
    cardholder's biometric characteristics are not successfully acquired, the
    cardholder **SHALL** provide the PIV Card to be reset and another primary identity
    source document (as specified in [Section 2.7](requirements.md#s-2-7)) via the
    scanners and sensors integrated into the station. The remote operator **SHALL**
    inspect these items and compare the video feed of the cardholder with the
    electronic facial image retrieved from the enrollment data record and the
    photograph printed on the PIV Card. 
   
General computing platform
: Remote PIN reset on a general computing platform (e.g., desktop, laptop) **SHALL** only be performed if all the following requirements are met:
    
    * The cardholder initiates a PIN reset with the issuer operator.
    * The operator authenticates the owner of the PIV Card through an independent
        procedure, for example by authenticating the cardholder with an associated derived PIV credential or by confirming reset via email to the on-record government-issued email address.
    * The cardholder's biometric characteristics elicit a positive biometric verification decision when compared to the stored biometric data records on the PIV Card through the OCC-AUTH authentication mechanism.

The remote PIN reset operation **SHALL** satisfy the requirements for remote, post-issuance updates
specified in [Section 2.9.2](requirements.md#s-2-9-2).


Regardless of the PIN reset procedure used, the chosen PIN **SHALL** meet the activation requirements specified in [Section 4.3.1](frontend.md#s-4-3-1).

#### 2.9.3.2 OCC Reset {#s-2-9-3-2}

Both fingerprints used for OCC **SHALL** be replaced during an OCC reset.

OCC reset **MAY** be performed in person at an issuing facility
or a supervised remote identity proofing station:

In person
: When OCC reset is performed in person at the issuing facility, before the
    reset, the issuer **SHALL** perform a biometric verification of the
    cardholder to the biometric data records in the PIV enrollment
    record.[^occ_reset_characteristic] If the biometric verification decision is
    negative or no alternative biometric data records are available, the
    cardholder **SHALL** provide the PIV Card to be reset and another primary
    identity source document (as specified in [Section 2.7](requirements.md#s-2-7)).
    An attending operator **SHALL** inspect these
    and compare the cardholder with the electronic facial image retrieved from
    the enrollment data record and the photograph printed on the PIV Card.

Supervised remote identity proofing station
: OCC reset at a supervised remote identity proofing station combines the
    assurance of an in-person reset with the convenience of a kiosk reset. All
    protections and requirements of [Section 2.7.1](requirements.md#s-2-7-1)
    **SHALL** be observed during the procedure. The operator **SHALL** initiate
    a biometric verification to ensure that the cardholder's biometric
    characteristics captured at the station elicit a positive biometric
    verification decision when compared to biometric data records stored in the
    PIV enrollment record or when compared to the biometric data records on the
    PIV Card using the BIO-A authentication
    mechanism.[^occ_reset_characteristic] In cases where a negative biometric
    verification decision is returned or the cardholder's biometric
    characteristics are not successfully acquired, the cardholder **SHALL**
    provide the PIV Card to be reset and another primary identity source
    document (as specified in [Section 2.7](requirements.md#s-2-7)) via the
    scanners and sensors integrated into the station. The remote operator
    **SHALL** inspect these items and compare the video feed of the cardholder
    with the electronic facial image retrieved from the enrollment data record
    and the photograph printed on the PIV Card. 

[^occ_reset_characteristic]: If OCC is being reset due to epidermal damage on a specific finger, it may be prudent to perform the biometric comparison with a different finger or different biometric characteristic. However, it is possible that the comparison algorithm available to the issuer could obtain a positive biometric verification decision with damaged epidermis while the OCC algorithm could not.

### 2.9.4 PIV Card Termination Requirements {#s-2-9-4}

A PIV Card is terminated when the department or agency that issued the card determines that the
cardholder is no longer eligible to have a PIV Card. The PIV Card **SHALL** be terminated under any of the
following circumstances:

+ A federal employee separates (voluntarily or involuntarily) from federal service.
+ A contractor changes positions and no longer needs access to federal buildings or systems.
+ A cardholder passes away.
+ An authorized adjudicative entity determines that the
    cardholder is ineligible for a PIV Card after completion of a cardholder's background investigation
    or review of developed information (see [[FCS]](references.md#ref-FCS) and [[CSP]](references.md#ref-CSP)).
+ A cardholder is determined to hold a fraudulent identity.

Similar to the situation in which the PIV Card is compromised, normal termination procedures
must be in place. The PIV Card **SHALL** be revoked through the following procedure:

* The PIV Card **SHALL** be collected and destroyed, if possible.
* Per OPM guidance, the Central Verification System (or successor) **SHALL** be updated to reflect the change in status (see [Section 2.2](requirements.md#s-2-2)).
* Any databases maintained by the PIV Card issuer that indicate current valid or invalid
    FASC-N or card UUID values **SHALL** be updated to reflect the change in status.
* If the PIV Card cannot be collected and destroyed, the CA **SHALL** be informed and the
    certificates corresponding to the PIV authentication key and the asymmetric card
    authentication key on the PIV Card **SHALL** be revoked. The certificates corresponding to the
    digital signature and key management keys **SHALL** also be revoked, if present.
* Card management systems **SHALL** be updated to reflect PIV Card termination and method of termination 
    (e.g., PIV Card destruction for collected PIV Cards or certificate revocations for uncollected PIV Cards).
    
In addition, the PIV Card termination procedures **SHALL** ensure that all derived PIV credentials bound to the PIV identity account are invalidated as specified in [Section 2.10.2](requirements.md#s-2-10-2).

If the card cannot be collected, normal termination procedures **SHALL** be completed within 18&nbsp;hours of
notification. In certain cases, 18&nbsp;hours is an unacceptable delay and in those cases emergency procedures
**SHOULD** be executed to disseminate the information as rapidly as possible.

The PII collected from the cardholder **SHALL** be disposed of in accordance with the stated privacy and data
retention policies of the department or agency.

## 2.10 Derived PIV Credentials {#s-2-10}

Derived PIV credentials are additional PIV credentials that are issued based on proof of possession and control of a PIV Card. These credentials are not embedded in the PIV Card but instead are stand-alone or integrated in a variety of devices and platforms. Derived PIV credentials play an important role for environments where use of the PIV Card is not easily supported.

### 2.10.1 Derived PIV Credential Issuance Requirements {#s-2-10-1}

Issuance of a derived PIV credential is an instance of the post-enrollment binding of an authenticator described in [[SP 800-63B]](references.md#ref-SP-800-63B) and **SHALL** be performed in accordance with the requirements that apply to physical authenticators as well as the requirements in this section.

The binding and issuance of derived PIV credentials **SHALL** use valid PIV Cards to establish cardholder identity in accordance with
[[SP 800-157]](references.md#ref-SP-800-157). Derived PIV credentials **SHALL** meet the requirements for Authenticator Assurance Level (AAL) 2 or 3 specified in [[SP 800-63B]](references.md#ref-SP-800-63B). All derived PIV credentials meeting AAL2 but not AAL3 requirements **SHALL** allow authentication at AAL2 only. Derived PIV credentials meeting AAL3 requirements also fulfill the requirements of AAL2 and can be used in circumstances requiring AAL2. The issuer **SHALL** attempt to promptly notify the cardholder of the binding of a derived PIV credential through an independent means that would not afford an attacker an opportunity to erase the notification. More than one independent notification method **MAY** be used to ensure prompt receipt by the cardholder. 

Derived PIV credentials **SHALL** be bound to the cardholder's PIV identity account only by the issuing department or agency responsible for managing that PIV identity account. If the issuing department or agency relies on shared services for portions of the PIV Card or Derived PIV credential issuance process, it is the responsibility of the issuing department or agency to ensure that all credentials and IDMS records are properly maintained throughout the PIV lifecycle.

### 2.10.2 Derived PIV Credential Invalidation Requirements {#s-2-10-2}

Derived PIV credentials **SHALL** be invalidated in any of the following circumstances:

* upon request of the PIV cardholder as a result of loss, failure, compromise, or intent to discontinue use of a derived PIV credential;
* at the determination of the issuer upon reported loss or suspected compromise of a derived PIV credential;
* at the determination of the issuer upon observation of possible fraudulent activity; or
* when the associated PIV Card is terminated as specified in [Section 2.9.4](requirements.md#s-2-9-4)&mdash;in this situation, all derived PIV credentials associated with the PIV identity account **SHALL** be invalidated.

If the derived PIV credential to be invalidated contains a derived PIV authentication certificate and the corresponding private key cannot be securely zeroized or destroyed, the CA **SHALL** be informed and the certificate corresponding to the derived PIV authentication key **SHALL** be revoked.

A derived PIV credential **SHALL NOT** be accepted for authentication once the credential has been invalidated. When invalidation occurs, the issuer **SHALL** notify the cardholder of the change.

### 2.10.3 Derived PIV Credential Reissuance and Post-Issuance Update Requirements {#s-2-10-3}
{:latex-toc="2.10.3 Derived PIV Credential Reissuance and Update Requirements"}

PKI-based derived PIV Credentials (i.e., those containing attribute information describing the PIV cardholder) **SHALL** be updated or reissued as described in [[SP 800-157]](references.md#ref-SP-800-157) Section 2.3 when the corresponding PIV Card is updated or reissued. Non-PKI derived PIV credentials are not required to be updated or reissued in these situations.

## 2.11 PIV Privacy Requirements {#s-2-11}

[[HSPD-12]](references.md#ref-HSPD-12) explicitly states that "protect[ing] personal privacy" is a requirement of the PIV system. As
such, all departments and agencies **SHALL** implement the PIV system in accordance with the spirit and letter
of all privacy controls specified in this Standard, as well as those specified in federal privacy laws and
policies including but not limited to the E-Government Act of 2002 [[E-Gov]](references.md#ref-E-Gov), the Privacy Act of 1974
[[PRIVACY]](references.md#ref-PRIVACY), and OMB [[M-03-22]](references.md#ref-OMB0322), as applicable.

Departments and agencies may have a wide variety of uses for the PIV system and its components that
were not intended or anticipated by the President in issuing [[HSPD-12]](references.md#ref-HSPD-12). In considering whether a
proposed use of the PIV system is appropriate, departments and agencies **SHALL** consider the
aforementioned control objectives and the purpose of this Standard, namely "to enhance security, increase
Government efficiency, reduce identity fraud, and protect personal privacy" as per [[HSPD-12]](references.md#ref-HSPD-12). No department
or agency **SHALL** implement a use of the identity credential inconsistent with these control objectives.

To ensure privacy throughout the PIV lifecycle, departments and agencies **SHALL** do the following:

- Assign an individual to the role of privacy official.[^privacyofficial] The privacy official is the individual who
    oversees privacy-related matters in the PIV system and is responsible for implementing the privacy
    requirements in the Standard. The individual serving in this role **SHALL NOT** assume any other
    operational role in the PIV system.
- Conduct a comprehensive Privacy Impact Assessment (PIA) and a periodic review and update of the assessment on systems containing PII for the
    purpose of implementing PIV consistent with the methodology of [[E-Gov]](references.md#ref-E-Gov) and the requirements of
    [[M-03-22]](references.md#ref-OMB0322). Consult with appropriate personnel responsible for privacy issues at the department or
    agency (e.g., Chief Information Officer) implementing the PIV system.
- Write, publish, and maintain a clear and comprehensive document listing the types of information that
    will be collected (e.g., transactional information, PII), the purpose of collection, what information
    may be disclosed to whom during the life of the credential, how the information will be protected, and
    the complete set of uses of the credential and related information at the department or agency.
- Provide PIV applicants with full disclosure of the intended uses of the information associated with the PIV
    Card and the related privacy implications.
- Ensure that systems that contain PII for the purpose of enabling the implementation of PIV are
    handled in full compliance with fair information practices, as defined in [[PRIVACY]](references.md#ref-PRIVACY).
- Maintain appeal procedures for those who are denied a credential or whose credentials are revoked.
- Ensure that only personnel with a legitimate need for access to PII in the PIV system are authorized to
    access the PII, including but not limited to information and databases maintained for registration and
    credential issuance.[^access]
- Coordinate with appropriate department or agency officials to define consequences for violating
    privacy policies of the PIV system.
- Ensure that the technologies used in the department or agency's implementation of the PIV system 
    allow for continuous auditing of compliance with stated privacy policies and with practices governing
		the collection, use, and distribution of information in the operation of the program.
- Utilize security controls described in [[SP 800-53]](references.md#ref-SP-800-53) to accomplish privacy goals, where applicable.
- Ensure that the technologies used to implement PIV sustain and do not erode privacy protections
    relating to the use, collection, and disclosure of PII. Agencies **MAY** choose to deploy PIV Cards with
    electromagnetically opaque holders or other technology to protect against any unauthorized
    contactless access to information stored on a PIV Card.

[^privacyofficial]: Privacy official refers to the Senior Agency Official for Privacy (SAOP) or Chief Privacy Officer (CPO).

[^access]: Agencies may refer to [[SP 800-122]](../references/#ref-SP-800-122) for best practice guidelines on protection of PII.
