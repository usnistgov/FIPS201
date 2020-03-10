---
layout: default
title: PIV System Overview
navOrder: 3
navTitle: System
permalink: /system/
---
# 3. PIV System Overview {#s-3}

*This section is informative.*

The PIV system is composed of components and processes that support a common
platform for identity authentication across federal departments and agencies for access to multiple types
of physical and logical access environments. The specifications for the PIV components in this Standard
promote uniformity and interoperability among the various PIV system components, across departments
and agencies, and across installations. The specifications for processes in this Standard are a set of
minimum requirements for the various activities that need to be performed within an operational PIV
system. When implemented in accordance with this Standard, the PIV Card and derived PIV credentials support a suite of
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

[Figure 3-1. PIV System Overview](#fig-3-1){:name="fig-3-1"}
{:latex-ignore="true"}

![PIV System Overview]({{site.baseurl}}/{{page.collection}}/images/system.png){:style="width: 1047px;" latex-src="system.pdf" latex-fig="3-1"}

[Figure 3-1](#fig-3-1) illustrates a notional model for the operational PIV system, identifying the various system
components and the direction of data flow between these components. The boundary shown in the figure
is not meant to preclude FIPS 201 requirements on systems outside these boundaries.

### 3.1.1 PIV Front-End Subsystem {#s-3-1-1}

The PIV Card will be issued to the applicant when all identity proofing, registration, and issuance
processes have been completed. The PIV Card has a credit card-size form factor, with one or more
embedded integrated circuit chips (ICC) that provide memory capacity and computational capability. The
PIV Card is the primary component of the PIV system. The holder uses the PIV Card for authentication
to various physical and logical resources.

Card readers are located at access points for controlled resources where a cardholder may wish to gain
access (physical and logical) by using the PIV Card. The reader communicates with the PIV Card to
retrieve the appropriate information, located in the card's memory, to relay it to the access control
systems for granting or denying access.

Card writers, which are very similar to the card readers, personalize and initialize the information stored
on PIV Cards. Card writers MAY also be used to perform remote PIV Card updates (see [Section 2.9.2](requirements.md#s-2-9-2)).
The data to be stored on PIV Cards includes personal information, certificates, cryptographic keys, the
PIN, and biometric data, and is discussed in further detail in subsequent sections.

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

[^somethingyouknow]: For more information on the terms "something you know," "something you have," and "something you are," see [[SP 800-63]](../_Appendix/references.md#ref-SP-800-63).
[^oncardbiometric]: Alternatively, a biometric on-card one-to-one comparison can be used to activate the PIV Card.

### 3.1.2 PIV Card Issuance and Management Subsystem {#s-3-1-2}

The identity proofing and registration component in [Figure 3-1](#fig-3-1) refers to the process of collecting, storing,
and maintaining all information and documentation that is required for verifying and assuring the
applicant's identity. Various types of information are collected from the applicant at the time of
registration.

The card issuance and maintenance component deals with the personalization of the physical (visual
surface) and logical (contents of the ICC) aspects of the card at the time of issuance and maintenance
thereafter. This includes printing photographs, names, and other information on the card and loading the
relevant card applications, biometric data, and other data.

The key management component is responsible for the generation of key pairs, the issuance and
distribution of digital certificates containing the public keys of the cardholder, and management and
dissemination of certificate status information. The key management component is used throughout the
lifecycle of PIV Cards—from generation and loading of authentication keys and PKI credentials, to usage
of these keys for secure operations, to eventual reissuance or termination of the card. The key
management component is also responsible for the provisioning of publicly accessible repositories and
services (such as PKI directories and certificate status responders) that provide information to the
requesting application about the status of the PKI credentials.

### 3.1.3 PIV Relying Subsystem {#s-3-1-3}

The PIV relying subsystem includes components responsible for determining a particular PIV
cardholder's access to a physical or logical resource. A physical resource is the secured facility (e.g.,
building, room, parking garage) that the cardholder wishes to access. The logical resource is typically a
network or a location on the network (e.g., computer workstation, folder, file, database record, software
program) to which the cardholder wants to gain access.

The authorization data component comprises information that defines the privileges (authorizations)
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

The PIV Card lifecycle consists of seven activities. The activities that take place during fabrication and
pre-personalization of the card at the manufacturer are not considered a part of this lifecycle model.
[Figure 3-2](#fig-3-2) presents these PIV activities and depicts the PIV Card request as the initial activity and PIV
Card termination as the end of life.

[Figure 3-2. PIV Card Lifecycle Activities](#fig-3-2){:name="fig-3-2"}
{:latex-ignore="true"}

![PIV Card Lifecycle Activities]({{site.baseurl}}/{{page.collection}}/images/lifecycle.png){:style="width: 1047px;" latex-src="lifecycle.pdf" latex-fig="3-2"}

Descriptions of the seven card lifecycle activities are as follows:

- **PIV Card Request.** This activity applies to the initiation of a request for the issuance of a PIV Card
    to an applicant and the validation of this request.
- **Identity Proofing and Registration.**[^enroll] The goal of this activity is to verify the claimed identity of the
    applicant, verify that the entire set of identity source documents presented at the time of registration is
    valid, capture biometric characteristics, and optionally create the PIV enrollment record.
- **PIV Card Issuance.** This activity deals with the personalization (physical and logical) of the card
    and the issuance of the card to the intended applicant.
- **PKI Credential Issuance.** This activity deals with generating logical credentials and loading them
    onto the PIV Card.
- **PIV Card Usage.** During this activity, the PIV Card is used to perform cardholder authentication for
    access to a physical or logical resource. Access authorization decisions are made after successful
    cardholder identification and authentication.
- **PIV Card Maintenance.** This activity deals with the maintenance or update of the physical card and
    its data. Such data includes various card applications, PINs, PKI credentials, and
    biometric data.
- **PIV Card Termination.** The termination process is used to permanently destroy or invalidate the
    PIV Card and the data and keys needed for authentication so as to prevent any future use of the card
    for authentication.

[^enroll]: In some other NIST documents such as [[SP 800-63A]](../_Appendix/references.md#ref-SP-800-63A), registration is referred to as *enrollment*.
