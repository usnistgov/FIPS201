---
layout: default
title: PIV System Overview
navOrder: 3
navTitle: System
permalink: /system/
---
# 3. PIV System Overview {#s-3}

*This section is informative.*

The PIV system is composed of components and processes that support a common (smart card-based)
platform for identity authentication across federal departments and agencies for access to multiple types
of physical and logical access environments. The specifications for the PIV components in this Standard
promote uniformity and interoperability among the various PIV system components, across departments
and agencies, and across installations. The specifications for processes in this Standard are a set of
minimum requirements for the various activities that need to be performed within an operational PIV
system. When implemented in accordance with this Standard, the PIV Card supports a suite of
authentication mechanisms that can be used consistently across departments and agencies. The
authenticated identity information can then be used as a basis for access control in various federal
physical and logical access environments. The following sections briefly discuss the functional
components of the PIV system and the lifecycle activities of the PIV Card.

## 3.1 Functional Components {#s-3-1}

An operational PIV system can be logically divided into the following three major subsystems:

- **PIV Front-End Subsystem**—PIV Card, card readers, biometric capture devices, and PIN input device. The PIV
    cardholder interacts with these components to gain physical or logical access to the desired federal
    resource.
- **PIV Card Issuance and Management Subsystem**—the components responsible for identity
    proofing and registration, card and key issuance and management, and the various repositories and
    services (e.g., public key infrastructure (PKI) directory, certificate status servers) required as part of
    the verification infrastructure. This subsystem also manages the binding and termination of derived PIV credentials as described in [Section 2.10](requirements.md#s-2-10).
- **PIV Relying Subsystem**—the physical and logical access control systems, the protected resources,
    and the authorization data.

The PIV relying subsystem becomes relevant when the PIV Card is used to authenticate a cardholder who
is seeking access to a physical or logical resource. Although this Standard does not provide technical
specifications for this subsystem, various mechanisms for identification and authentication are defined in
[Section 6](authentication.md#s-6) to provide consistent and secure means for performing the authentication function preceding an
access control decision.

[Figure 3-1](#fig-3-1){:name="fig-3-1"}

![Figure 3-1]({{site.baseurl}}/{{page.collection}}/images/system.png){:style="width: 1047px;" latex-src="system.eps"}

[Figure 3-1](#fig-3-1) illustrates a notional model for the operational PIV system, identifying the various system
components and the direction of data flow between these components. The boundary shown in the figure
is not meant to preclude FIPS 201 requirements on systems outside these boundaries.

### 3.1.1 PIV Front-End Subsystem {#s-3-1-1}

The PIV Card will be issued to the applicant when all identity proofing, registration, and issuance
processes have been completed. Derived PIV credentials might also be issued after post-enrollment binding is complete. The PIV Card takes the physical form of the [[ISO7816]] ID-1 card type (e.g., traditional payment card), with one or more
embedded integrated circuit chips (ICC) that provide memory capacity and computational capability. The
PIV Card is the primary component of the PIV system. The holder uses the PIV Card for authentication
to various physical and logical resources. Derived PIV credentials increasingly play an important role as additional authenticators, especially in environments where use of the PIV Card is not easily supported. These AAL2 and/or AAL3 authenticators are not embedded in the PIV Card, but rather are stand-alone or integrated in a variety of devices/platforms. 

Card readers are located at access points for controlled resources where a cardholder may wish to gain
access (physical and logical) by using the PIV Card. The reader communicates with the PIV Card to
retrieve the appropriate information, located in the card's memory, to relay it to the access control
systems for granting or denying access.

Card writers, which are very similar to the card readers, personalize and initialize the information stored
on PIV Cards. Card writers MAY also be used to perform remote PIV Card updates (see [Section 2.9.2](requirements.md#s-2-9-2)).
The data to be stored on PIV Cards includes personal information, certificates, cryptographic keys, the
PIN, and biometric data.

PIN input devices can be used along with card readers when a higher level of authentication assurance is
required. The cardholder presenting the PIV Card must type in his or her PIN into the PIN input device.
For physical access, the PIN is typically entered using a PIN pad device; a keyboard is generally used for
logical access. The input of a PIN provides a "something you know"[^somethingyouknow] authentication factor that
activates[^oncardbiometric] the PIV Card and enables access to other credentials resident on the card that provide
additional factors of authentication. A cryptographic key and certificate, for example, provides an
additional authentication factor of "something you have" (i.e., the card) through PKI-based
authentication.

Biometric capture devices may be located at secure locations where a cardholder may want to gain access. These
devices depend upon the use of biometric data of the cardholder, stored in the memory of the card, and its
comparison with a real-time captured biometric sample. The use of biometric characteristics provides an additional factor of
authentication ("something you are") in addition to entering the PIN ("something you know") and
providing the card ("something you have") for cryptographic key-based authentication. This provides for
a higher level of authentication assurance.

Other input devices for derived PIV credentials might be applicable but are not described in this section. Details on their properties and functionalities will be specified in [[SP 800-157]](../_Appendix/references.md#ref-SP-800-63) if needed.

[^somethingyouknow]: For more information on the terms "something you know," "something you have," and "something you are," see [[SP 800-63]](../_Appendix/references.md#ref-SP-800-63).
[^oncardbiometric]: Alternatively, a biometric on-card one-to-one comparison can be used to activate the PIV Card.

### 3.1.2 PIV Issuance and Management Subsystem {#s-3-1-2}

The registration and issuance activties in [Figure 3-1](#fig-3-1) starts with identity proofing and registration where all information and documentation required for identity proofing and registration (i.e., enrollment) are collected, stored and maintained. The collected information is subsequently used to personalize and issue the PIV Card as well as binding and issuing derived PIV credentials as additional PIV authenticators.

The PIV Card issuance process focuses on the personalization of the physical (visual
surface) and logical (contents of the ICC) aspects of the card at the time of issuance and maintenance
thereafter. This includes printing photographs, names, and other information on the card and loading the
relevant card applications, biometric data, and other data.

The PKI component provides services for PKI-based PIV credentials. This component is used throughout the
lifecycle of PIV Cards and PKI-based derived PIV credentials—from generation and loading of authentication keys and PKI credentials, to usage of these keys for secure operations, to eventual reissuance or termination of the card and associated derived PIV credentials. At the personalization phase, the PKI component issues and distributes the digital certificates for the keys generated on-card and keys generated for PKI-based derived PIV credentials. During use of the PIV credentials at authentication, the PKI component provides 
requesting application certificate status information of the PKI credentials requesting access.

The enterprise IDMS serves as the central repository for the cardholder’s digital identities.  It is where the relevant cardholder attributes are maintained.  The IDMS creates the PIV account and associates the cardholder's PIV Card and derived PIV credentials with the account.  The account is maintained throughout the cardholder’s employment with the organization. Various ICAM related system connect to the IDMS to request or update cardholder attributes. For example
  * A security office may provide updated background investigative information to the IDMS.
  * An HR system may relay hiring status updates.
  * Relying Parties (RP), for whom the IDMS may serve as the Credential Service Provider (CSP), authenticate the PIV credential holder and issue assertions derived from the credential.

### 3.1.3 PIV Relying Subsystem {#s-3-1-3}

The PIV relying subsystem includes components responsible for determining a particular PIV
cardholder's access to a physical or logical resource.[^DPC] A physical resource is the secured facility (e.g.,
building, room, parking garage) that the cardholder wishes to access. The logical resource is typically a
network or a location on the network (e.g., computer workstation, folder, file, database record, software
program) to which the cardholder wants to gain access.

[^DPC]:  The cardholder may authenticate with the PIV card or a derived PIV credential.

The relying system depends on an authorization data component that defines the privileges (authorizations)
possessed by entities requesting to access a particular logical or physical resource. An example of this is
an access control list (ACL) associated with a file on a computer system.

The physical and logical access control system grants or denies access to a particular resource and
includes an identification and authentication (I&A) component as well as an authorization component.

The I&A component identifies and authenticates cardholders either by interacting with the PIV Card and uses mechanisms discussed in [Section 6](authentication.md#s-6) or 
by communicating with an IdP through a federation protocol as discussed in [Section 7](federation.md#s-7). Once authenticated, the I&A component passes information to the
authorization component which in turn interacts with the authorization data component to match the
cardholder information to the information on record. Either the RP or the IdP interface with
the card reader, the PIN input device, the biometric capture device, supplementary databases, and any certificate
status service.

## 3.2 PIV Card Lifecycle Activities {#s-3-2}

The PIV Card lifecycle consists of seven activities. [^DPCLifecyle] The activities that take place during fabrication and
pre-personalization of the card at the manufacturer are not considered a part of this lifecycle model.
[Figure 3-2](#fig-3-2) presents these PIV activities and depicts the PIV Card request as the initial activity and PIV
Card termination as the end of life.

[^DPCLifecycle]: The lifecyle activities of derived PIV credential are described in SP 800-157.

[Figure 3-2. PIV Card Lifecycle Activities](#fig-3-2){:name="fig-3-2"}

![Figure 3-2]({{site.baseurl}}/{{page.collection}}/images/lifecycle.png){:style="width: 1047px;" latex-src="lifecycle.eps"}

Descriptions of the seven card lifecycle activities are as follows:

- **PIV Card Request.** This activity applies to the initiation of a request for the issuance of a PIV Card
    to an applicant and the validation of this request.
- **Identity Proofing and Registration.**[^enroll] The goal of this activity is to verify the claimed identity of the
    applicant, verify that the entire set of identity source documents presented at the time of registration is
    valid, capture biometric characteristics, and optionally create the PIV enrollment record record.
- **PIV Card Issuance.** This activity deals with the personalization (physical and logical) of the card
    and the issuance of the card to the intended applicant.
- **PKI Credential Issuance.** This activity deals with generating logical credentials and loading them
    onto the PIV Card.
- **PIV Card Usage.** During this activity, the PIV Card is used to perform cardholder authentication for
    access to a physical or logical resource. Access authorization decisions are made after successful
    cardholder identification and authentication.
- **PIV Card Maintenance.** This activity deals with the maintenance or update of the physical card and
    the data stored thereon. Such data includes various card applications, PINs, PKI credentials, and
    biometric data.
- **PIV Card Termination.** The termination process is used to permanently destroy or invalidate the
    PIV Card and the data and keys needed for authentication so as to prevent any future use of the card
    for authentication.

[^enroll]: In some other NIST documents such as [[SP 800-63A]](../_Appendix/references.md#ref-SP-800-63A), registration is referred to as *enrollment*.
