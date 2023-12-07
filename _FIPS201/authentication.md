---
layout: default
title: PIV Cardholder Authentication
navOrder: 9
navTitle: Authentication
permalink: /authentication/
anchor: s-6
section: 6
---

~~~
\addtocontents{toc}{\protect\clearpage} % force a page break in the ToC
~~~
{:latex-literal="true"}

# 6. PIV Cardholder Authentication {#s-6}

_This section is normative._ It defines a suite of authentication mechanisms that are supported by all PIV Cards as well as
the applicability of these mechanisms in meeting the requirements for a set of graduated assurance levels. This
section also defines some authentication mechanisms that make use of credential elements that **MAY**
optionally be included on PIV Cards. Specific implementation details of authentication mechanisms
identified in this section are provided in [[SP 800-73]](references.md#ref-SP-800-73). Graduated authenticator assurance levels are also applicable to derived PIV credentials used in accordance with [[SP 800-157]](references.md#ref-SP-800-157).

While this section identifies a wide range of authentication
mechanisms, departments and agencies may adopt additional mechanisms that
use the identity credentials on the PIV Card. In the context of the PIV Card application,
authentication is defined as the process of establishing confidence in the identity of the cardholder
presenting a PIV Card. The authenticated identity can then be used to determine the permissions or
authorizations granted to that identity for access to various physical and logical resources.

The authentication mechanisms in this section describe how to authenticate using the PIV Card directly. The 
authenticated identity can also be used to create an identity assertion as part of a federation
protocol, as described in [Section 7](federation.md#s-7) and further specified in [[SP 800-217]](references.md#ref-SP-800-217).

## 6.1 PIV Assurance Levels {#s-6-1}

This Standard defines multiple levels of assurance for logical and physical access. Each assurance level establishes a degree of confidence that the presenter of
the PIV Card is the person referred to by the PIV credential. The entity performing the authentication further establishes confidence that the person referred to by the PIV credential is a specific person identified through the rigor of the identity proofing process conducted prior to issuance of the PIV Card and the security of the PIV Card and issuance and maintenance processes specified in [Section 2](requirements.md#s-2). The PIV identity proofing, registration, issuance, and maintenance processes meet[^compensating] the
requirements for IAL3, as defined in [[SP 800-63A]](references.md#ref-SP-800-63A).

The PIV Card contains a number of logical credentials that are used by the authentication mechanisms specified in [Section 6.2](authentication.md#s-6-2). PIV assurance levels may vary
depending on the PIV authentication mechanism used. The assurance levels for physical and logical access are specified in [Section 6.3.1](authentication.md#s-6-3-1) and [Section 6.3.2](authentication.md#s-6-3-2), respectively.

Parties responsible for controlling access to federal resources (both physical and logical) **SHALL** determine
the appropriate assurance levels required for access based on the harm and impact to
individuals and organizations that could occur as a result of errors in the authentication of the PIV
cardholder. Once the required assurance level has been determined, one of the authentication mechanisms
specified in [Section 6.2](authentication.md#s-6-2) **SHALL** be applied to achieve that assurance level.

[^compensating]: As described in [Section 2.7](../requirements/#s-2-7), compensating controls can be applied for identity source document evidence to achieve IAL3 since the Standard only specifies one piece of Strong evidence and one other piece of Fair evidence. Issuance of PIV Card meets IAL3 since the federal background investigation serves as a comparable compensating control for IAL3 identity proofing. 

### 6.1.1 Relationship to Federal Identity Policy (Removed) {#s-6-1-1}
{:latex-toc="6.1.1 Relationship to Federal Identity Policy"}

> Note: This section was formerly entitled "Relationship to OMB's E-Authentication Guidance."

The content of this section has been removed since OMB [[M-04-04]](references.md#ref-OMB0404) has been rescinded by OMB [[M-19-17]](references.md#ref-OMB1917), which recognizes the IALs and AALs defined in NIST [[SP 800-63]](references.md#ref-SP-800-63) as the framework for managing digital identity risks within the Federal Government. The policy established by [[HSPD-12]](references.md#ref-HSPD-12) still applies under this new memorandum. 

A mapping between PIV authentication mechanisms and SP 800-63 authenticator assurance levels can be found in [Section 6.3.2](authentication.md#s-6-3-2).

## 6.2 PIV Card Authentication Mechanisms {#s-6-2}

The following subsections define the basic types of authentication mechanisms that are supported by the
credential set hosted by the PIV Card application. PIV Cards can be used for authentication in
environments that are equipped with contact or contactless card readers. The usage environment affects the PIV
authentication mechanisms that may be applied to a particular situation.

### 6.2.1 Authentication Using Off-Card Biometric One-to-One Comparison {#s-6-2-1}
{:latex-toc="6.2.1 Off-Card Biometric One-to-One Comparison"}

The PIV Card application hosts the fingerprint biometric templates, electronic facial image, and optional electronic iris images.
These biometric data records can be read from the card following CTC authentication using a PIN
supplied by the cardholder. The biometric data records are designed to support the 
CTE authentication mechanism through an off-card biometric one-to-one comparison scheme. The following subsections
define two authentication mechanisms that make use of biometric data records.[^bioreaders]

Some characteristics of the authentication mechanisms using biometric data are as follows:

- strong resistance to use of the PIV Card by a non-owner since both PIN entry and cardholder biometric characteristics are
    required,
- digital signature on biometric data records, which is checked to further strengthen the mechanism,
- slower since it requires multiple interactions with the cardholder for presentation of the PIN and acquisition of a biometric sample,
- does not provide protection against use of a revoked card, and
- usable with both contact card readers and contactless card readers that support the virtual contact
    interface.

[^bioreaders]: As noted in [Section 4.2.3.1](../frontend/#s-4-2-3-1), fingerprint biometric templates are not guaranteed to contain biometric characteristic data since it may not be possible to collect fingerprints from some cardholders. Additionally, electronic iris images are not guaranteed to be present on a PIV Card since iris biometric capture is optional. When biometric verification cannot be performed, PKI-AUTH is the recommended alternate authentication mechanism.

#### 6.2.1.1 Unattended Authentication Using Biometric Data (BIO) {#s-6-2-1-1}

The following steps **SHALL** be performed for unattended authentication using biometric data:

- The CHUID or another data element[^expired] is read from the card. The signature of the CHUID or another data element is verified to ensure that the card has not expired and that the card comes from a trusted source.
- The cardholder is prompted to enter a PIN to activate the PIV Card.
- The biometric data record is read from the card.
- The signature on the biometric data record is verified to ensure that the biometric data record is intact and comes from a trusted
    source. Note that the signature verification may require retrieval of the content signing certificate
    from the CHUID if the signature on the biometric data record was generated with the same key as the signature
    on the CHUID.
- The cardholder is prompted to capture a new biometric sample.
- If the new biometric sample elicits a positive biometric verification decision, the cardholder is authenticated
    as the owner of the card.
- The FASC-N or the card UUID in the CHUID or other data element is compared with the corresponding element
    in the signed attributes field of the external digital signature in the biometric data record.
- A unique identifier within the CHUID or other data element is used as input to the authorization
    check to determine whether the cardholder should be granted access.

[^expired]: The PIV authentication certificate or card authentication certificate may be used instead of the CHUID to verify that the card is not expired.

#### 6.2.1.2 Attended Authentication Using Biometric Data (BIO-A) {#s-6-2-1-2}

In this higher assurance variant of BIO, an attendant (e.g., security guard) supervises 
the submission of the new biometric sample by the cardholder. Otherwise, the steps for this authentication mechanism
are the same as in [Section 6.2.1.1](authentication.md#s-6-2-1-1).

### 6.2.2 Authentication Using On-Card Biometric One-to-One Comparison (OCC-AUTH) {#s-6-2-2}
{:latex-toc="6.2.2 On-Card Biometric One-to-One Comparison"}

The PIV Card application **MAY** host an optional OCC algorithm. In this case,
OCC data is stored on the card, which cannot be read from the card but could be used for
biometric verification. A fingerprint biometric template is supplied to the card to perform CTC
authentication, and the card responds with a positive or negative biometric verification decision.
The response includes information that allows the reader to authenticate the card. Entry of the cardholder PIN is not required for OCC-AUTH. The PIV Card **SHALL** include a mechanism to block this
authentication mechanism after a number of consecutive failed authentication attempts as stipulated by
the department or agency. As with BIO and BIO-A, if agencies choose to
implement OCC, it **SHALL** be implemented as defined in [[SP 800-73]](references.md#ref-SP-800-73) and
[[SP 800-76]](references.md#ref-SP-800-76).

Some of the characteristics of OCC-AUTH are as follows:

- highly resistant to credential forgery;
- strong resistance to use of unaltered card by non-owner;
- usable with contact and contactless card readers; and
- privacy-enhancing, as the biometric template is compared directly on the PIV Card and never exported.

### 6.2.3 Authentication Using PIV Asymmetric Cryptography {#s-6-2-3}
{:latex-toc="6.2.3 PIV Asymmetric Cryptography"}

The PIV Card contains two mandatory asymmetric authentication private keys and corresponding
certificates to support CTE authentication, as described in [Section 4](frontend.md#s-4). The
following subsections describe how to perform authentication using the authentication keys.

#### 6.2.3.1 Authentication with the PIV Authentication Certificate Credential (PKI-AUTH) {#s-6-2-3-1}

The following steps **SHALL** be performed for PKI-AUTH:

- The PIV authentication certificate is read from the PIV Card application.
- The relying system validates the PIV authentication certificate from the PIV Card application using
    certificate path validation as specified in [[RFC 5280]](references.md#ref-RFC5280) to ensure that it is neither expired nor revoked and that it is
    from a trusted source. Path validation **SHOULD** be configured to specify which policy OIDs are trusted.[^pivpath]
- The cardholder is prompted to enter a PIN, which is used to activate the card. If implemented,
    other card activation mechanisms, as specified in [[SP 800-73]](references.md#ref-SP-800-73), **MAY** be used to activate the card.
- The relying system issues a challenge string to the card and requests an asymmetric operation in
    response.
- The card responds to the challenge by signing it using the PIV authentication
    private key.
- The relying system verifies the signature using the public key in the PIV authentication certificate.
- A unique identifier from the PIV authentication certificate is extracted and passed as input to the
    authorization check to determine whether the cardholder should be granted access.

Some of the characteristics of the PKI-based authentication mechanism are as follows:

- requires the use of certificate status checking infrastructure,
- highly resistant to credential forgery,
- strong resistance to the use of an unaltered card by a non-owner since card activation is required,
- protection against the use of a revoked card, and
- usable with both contact card readers and contactless card readers that support the virtual contact
    interface.

[^pivpath]: The policy OID for the PIV authentication certificate is `id-fpki-common-authentication`.

#### 6.2.3.2 Authentication with the Card Authentication Certificate Credential (PKI-CAK) {#s-6-2-3-2}

The following steps **SHALL** be performed for PKI-CAK:

- The card authentication certificate is read from the PIV Card application.
- The relying system validates the card authentication certificate from the PIV Card application using
    certificate path validation as specified in [[RFC 5280]](references.md#ref-RFC5280) to ensure that it is neither expired nor revoked and that it is
    from a trusted source. Path validation **SHOULD** be configured to specify which policy OIDs are trusted.[^cacpath]
- The relying system issues a challenge string to the card and requests an operation using
    an asymmetric cryptographic algorithm in response.
- The card responds to the previously issued challenge by signing it using the card authentication
    private key.
- The relying system verifies the signature using the public key in the card authentication certificate.
- A unique identifier from the card authentication certificate is extracted and passed as input to the
    authorization check to determine whether the cardholder should be granted access.

Some of the characteristics of the PKI-CAK authentication mechanism are as follows:

- requires the use of certificate status checking infrastructure,
- highly resistant to credential forgery,
- low resistance to use of unaltered card by non-owner, and
- usable with contact and contactless readers.

[^cacpath]: The policy OID for the card authentication certificate is `id-fpki-common-cardAuth`.

#### 6.2.3.3 Authentication Using Secure Messaging Key (SM-AUTH) {#s-6-2-3-3}

The PIV Card **MAY** include a secure messaging key and corresponding CVC to establish symmetric keys for use with secure messaging. The same key, CVC, and key establishment protocol can also be used for authentication, since the PIV Card is authenticated 
in the process of establishing secure messaging. Details of the SM-AUTH authentication 
mechanism are specified in [[SP 800-73]](references.md#ref-SP-800-73) and [[SP 800-78]](references.md#ref-SP-800-78).
 
Some of the characteristics of the secure messaging authentication mechanism are as
follows:

- resistant to credential forgery,
- does not provide protection against use of a revoked card,
- low resistance to the use of an unaltered card by a non-owner, and
- usable with contact and contactless readers.

### 6.2.4 Authentication Using the Symmetric Card Authentication Key (SYM-CAK) (Deprecated) {#s-6-2-4}
{:latex-toc="6.2.4 Symmetric Card Authentication Key"}

The symmetric card authentication key and associated SYM-CAK authentication mechanism are deprecated in this version of the Standard. Both the key and the authentication mechanism may be removed in a future version of this Standard. 

 If the symmetric card authentication key is present, it **SHALL** be used for PIV cardholder authentication using the following
steps:

- The CHUID or another data element[^expired2] is read from the card and is checked to ensure that the card has not expired.
- The digital signature on the data element is checked to ensure that it was signed by a trusted source
    and is unaltered.
- The reader issues a challenge string to the card and requests a response.
- The card responds to the previously issued challenge by encrypting the challenge using the symmetric
    card authentication key.
- The relying system decrypts the card's response with its symmetric key and verifies that it matches the challenge string sent to the card.
- A unique identifier within the data element is used as input to the authorization check to determine
    whether the cardholder should be granted access.

Some of the characteristics of the symmetric card authentication key authentication mechanism are as
follows:

- resistant to credential forgery,
- does not provide protection against use of a revoked card,
- low resistance to the use of an unaltered card by a non-owner, and
- usable with contact and contactless readers.

[^expired2]: The PIV authentication certificate or card authentication certificate may be leveraged instead of the CHUID to verify that the card is not expired.

### 6.2.5 Authentication Using the CHUID (Removed) {#s-6-2-5}
{:latex-toc="6.2.5 CHUID"}

The content of this section has been removed since the CHUID authentication mechanism is no longer allowed under FIPS-201. 

The BIO, BIO-A, and the deprecated SYM-CAK authentication mechanisms use the CHUID data element as a source for the card's expiration date.
The CHUID data element also provides the content signing certificate for some authentication mechanisms and unique identifiers for PACS ACLs. 
Therefore, the CHUID data element remains a required on-card data element, as described in [Section 4.2.1](frontend.md#s-4-2-1).

### 6.2.6 Authentication Using PIV Visual Credentials (VIS) (Deprecated) {#s-6-2-6}
{:latex-toc="6.2.6 PIV Visual Credentials"}

Visual authentication of a PIV cardholder as a stand-alone authentication mechanism has been deprecated in this version of the Standard. The mechanism provides little or no assurance of the cardholder's identity and **SHOULD NOT** be used. It is expected that the stand-alone use of visual authentication will be removed from this Standard in a future revision. 

~~~
\clearpage
~~~
{:latex-literal="true"}


The PIV Card has several mandatory features on the front (see [Section 4.1.4.1](frontend.md#s-4-1-4-1)) and
back (see [Section 4.1.4.2](frontend.md#s-4-1-4-2)) that support visual
identification and authentication:

Zone 1F
: Photograph

Zone 2F
: Name

Zone 8F
: Employee Affiliation

Zone 10F
: Agency, Department, or Organization

Zones 14F and 19F
: Card Expiration Date

Zone 15F
: Color-Coding for Employee Affiliation

Zone 1B
: Agency Card Serial Number

Zone 2B
: Issuer Identification Number

In addition, any available security features described in [Section 4.1.2](frontend.md#s-4-1-2) **SHOULD** be checked
in a visual inspection to provide additional assurance that the PIV Card is genuine and unaltered.

The PIV Card may also have several optional components on the front (see [Section 4.1.4.3](frontend.md#s-4-1-4-3)) and
back (see [Section 4.1.4.4](frontend.md#s-4-1-4-4)) that support visual
identification and authentication, such as:

Zone 3F
: Signature

Zone 11F
: Agency Seal

Zone 5B
: Physical Characteristics of Cardholder

When a cardholder attempts to pass through an access control point for a federally controlled facility, a
human guard **SHALL** perform visual identity verification of the cardholder and **SHALL** determine whether the
identified individual should be allowed through the control point. The following steps **SHALL** be applied in
the visual authentication process:

- The guard at the access control entry point determines whether the PIV Card appears to be genuine
    and has not been altered in any way.
- The guard compares the cardholder's facial features with the photograph on the card to ensure that they
    match.
- The guard checks the expiration date on the card to ensure that the card has not expired.
- The guard compares the cardholder's physical characteristic descriptions to those of the cardholder.
    (Optional)
- The guard collects the cardholder's signature and compares it with the signature on the card.
    (Optional)
- One or more of the other data elements on the card (e.g., name, employee affiliation, agency card
    serial number, issuer identification, agency name) are used to determine whether the cardholder
    should be granted access.

Some characteristics of the visual authentication mechanism include the following:

- human inspection of the card,
- does not provide rapid or high-volume access control,
- susceptible to human error,
- some resistance to the use of an unaltered card by a non-owner,
- low resistance to tampering and forgery, and
- does not provide protection against the use of a revoked card.

## 6.3 PIV Support of Graduated Authenticator Assurance Levels {#s-6-3}

The PIV Card supports a set of authentication mechanisms that can be used to implement graduated
assurance levels. The assurance levels used for remote/networked access within this Standard are closely aligned with
NIST [[SP 800-63]](references.md#ref-SP-800-63), which specifies a digital identity risk management process that is cited by OMB [[M-19-17]](references.md#ref-OMB1917).

The following subsections specify which PIV
authentication mechanisms can be used to support various assurance levels
described in this section. Two or more authentication mechanisms **MAY** be applied together
to achieve additional assurance of the identity of the PIV cardholder. For example, PKI-AUTH and BIO may be applied in unison to achieve additional assurance of cardholder identity.

Adequately designed and implemented relying systems can achieve the PIV Card
assurance levels stated in [Section 6.3.1](authentication.md#s-6-3-1) for physical access and in [Section 6.3.2](authentication.md#s-6-3-2) for logical access. Relying systems that are inadequately designed
or implemented may only achieve lower assurance levels. The design of the
components of relying systems&mdash;including card readers, biometric capture devices, cryptographic modules, and
key management systems&mdash;involves many factors not fully specified by FIPS 201, such as correctness of
the functional mechanism, physical protection of the mechanism, and environmental conditions at the
authentication point. Additional standards and best practice guidelines (e.g., [[SP 800-53]](references.md#ref-SP-800-53), [[FIPS 140]](references.md#ref-FIPS140), and [[SP 800-116]](references.md#ref-SP-800-116)) apply to the design and
implementation of relying systems.

The authentication mechanisms described in the subsections below apply specifically to the use of PIV Cards for physical and logical access. Authentication mechanisms for physical and logical access using derived PIV credentials is described in [[SP 800-157]](references.md#ref-SP-800-157).

### 6.3.1 Physical Access {#s-6-3-1}

The PIV Card can be used to authenticate the cardholder in a physical access control environment using the authentication mechanisms described in [Section 6.2](authentication.md#s-6-2). Each authentication mechanism provides a degree of assurance, as summarized in [Table 6-1](authentication.md#table-6-1), based on its characteristics outlined in [Section 6.2](authentication.md#s-6-2).

[Table 6-1. PIV Authentication Mechanisms for Physical Access](authentication.md#table-6-1){:name="table-6-1"}
{:latex-ignore="true"}

|PIV Authentication Mechanism|Assurance Provided|
|---|---|
|PKI-CAK|Some confidence in the asserted identity|
|SM-AUTH|Some confidence in the asserted identity|
|BIO|Medium confidence in the asserted identity|
|BIO-A|High confidence in the asserted identity|
|OCC-AUTH|High confidence in the asserted identity|
|PKI-AUTH|High confidence in the asserted identity|
|VIS (deprecated)|Little or no confidence in the asserted identity|
|SYM-CAK (deprecated)|Some confidence in the asserted identity|
{:latex-table="6-1" latex-caption="PIV Authentication Mechanisms for Physical Access"}

Each PIV authentication mechanism provides one or two factors of authentication. The mechanisms can be combined[^combined] to achieve up to three authentication factors (e.g., to access exclusion security areas). The number of factors afforded by each authentication mechanism and the required factors to access the controlled, limited, or exclusion security areas are further detailed in [[SP 800-116]](../references/#ref-SP-800-116).

The selection of authentication assurance levels **SHALL** be made in accordance with the applicable policies for a facility's security level [[RISK-MGMT-FACILITIES]](references.md#ref-RISK-MGMT-FACILITIES). Additional guidelines for the selection and use of PIV authentication mechanisms for facility access can be found in NIST [[SP 800-116]](references.md#ref-SP-800-116).

[^combined]: Combinations of authentication mechanisms are specified in [[SP 800-116]](../references/#ref-SP-800-116).

### 6.3.2 Logical Access {#s-6-3-2}

The PIV Card can be used to authenticate the cardholder in support of decisions regarding access to
logical information resources. For example, a cardholder may authenticate to their department or agency
network using the PIV Card; the identity established through this authentication process can be used to
determine access to information systems and applications available on the network.

[Table 6-2](authentication.md#table-6-2) lists the authentication mechanisms defined for this Standard to support logical access
control for remote/networked access. An authentication mechanism that is suitable for a higher assurance level can also be applied to
meet the requirements for a lower assurance level.

[Table 6-2. PIV Authentication Mechanisms for Remote/Network Access](authentication.md#table-6-2){:name="table-6-2"}
{:latex-ignore="true"}

|PIV Authentication Mechanism|Supported Authenticator Assurance Level|
|---|---|
|PKI-CAK|AAL1|
|PKI-AUTH|AAL3|
{:latex-table="6-2" latex-caption="PIV Authentication Mechanisms for Remote/Network Access"}

The [[SP 800-63]](references.md#ref-SP-800-63) defined authenticator assurance levels are not specified for local authentication use cases (i.e., authentication to a resource co-located with the cardholder). Nevertheless, the PIV authentication mechanisms provide for graduated levels of authentication assurance for local authentication use cases based on their characteristics outlined in [Section 6.2](authentication.md#s-6-2). The assurance provided by each of the PIV authentication mechanisms for local authentication use cases is summarized in [Table 6-3](authentication.md#table-6-3).

[Table 6-3. PIV Authentication Mechanisms for Local Workstation Access](authentication.md#table-6-3){:name="table-6-3"}
{:latex-ignore="true"}

|PIV Authentication Mechanism|Assurance Provided|
|---|---|
|PKI-CAK|Some confidence in the asserted identity|
|BIO|Medium confidence in the asserted identity|
|BIO-A|High confidence in the asserted identity|
|OCC-AUTH|High confidence in the asserted identity|
|PKI-AUTH|High confidence in the asserted identity|
{:latex-table="6-3" latex-caption="PIV Authentication Mechanisms for Local Workstation Access"}
