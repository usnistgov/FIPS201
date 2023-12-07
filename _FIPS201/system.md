---
layout: default
title: PIV System Overview
navOrder: 6
navTitle: System
permalink: /system/
anchor: s-3
section: 3
---

# 3. PIV System Overview {#s-3}

_This section is informative._ It provides an overview of the different components of the PIV system.

The PIV system is composed of components and processes that support a common
platform for identity authentication across federal departments and agencies for access to multiple types
of physical and logical access environments. The specifications for the PIV components in this Standard
promote uniformity and interoperability among the various PIV system components, across departments
and agencies, and across installations. The specifications for processes in this Standard are a set of
minimum requirements for the various activities that need to be performed within an operational PIV
system. When implemented in accordance with this Standard, PIV Cards and derived PIV credentials support a suite of
authentication mechanisms that can be used consistently across departments and agencies. The
authenticated identity information can then be used as a basis for access control in
physical and logical access environments. The following sections briefly discuss the functional
components of the PIV system and the lifecycle activities of the PIV Card.

## 3.1 Functional Components {#s-3-1}

An operational PIV system can be divided into three major subsystems:

PIV Front-End Subsystem
: The PIV Card, card readers, biometric capture devices, and PIN input devices,
    as well as any derived PIV credentials used by the PIV cardholder. The PIV
    cardholder interacts with these components to gain physical or logical access to the desired federal
    resource.

PIV Issuance and Management Subsystem
: The components responsible for identity
    proofing and registration, card and key issuance and management, and the various repositories and
    services required as part of
    the verification infrastructure, such as Public Key Infrastructure (PKI) directories and certificate status servers. This subsystem also manages the binding, issuance, and termination of derived PIV credentials as described in [Section 2.10](requirements.md#s-2-10).

PIV Relying Subsystem
: The physical and logical access control systems, protected resources,
    and authorization data. When discussed in the context of another external
    system or process, the relying subsystem is sometimes also referred to as the
    relying system; these terms are equivalent within this specification.

[Figure 3-1. PIV System Overview](system.md#fig-3-1){:name="fig-3-1"}
{:latex-ignore="true"}

![Diagram overview of the PIV system.]({{site.baseurl}}/{{page.collection}}/images/system.png 'PIV System Overview'){:style="width: 1047px;" latex-src="system.pdf" latex-fig="3-1"}

[Figure 3-1](system.md#fig-3-1) illustrates a notional model for the operational PIV system, identifying the various system
components. The boundary shown in the figure
is not meant to preclude FIPS 201 requirements on systems outside of these boundaries. See [Section 3.3](system.md#s-3-3) for 
information about data flow and connections between components.

### 3.1.1 PIV Front-End Subsystem {#s-3-1-1}

The PIV Front-End Subsystem in [Figure 3-1](system.md#fig-3-1) consists of credentials and devices that are used during authentication and, as described in [Section 3.1.2](system.md#s-3-1-2), for PIV issuance and management.
The PIV Card takes the physical form of the [[ISO 7816]](references.md#ref-ISO7816) ID-1 card type (i.e., traditional payment card) with one or more
embedded Integrated Circuit Chips (ICC) that provide memory capacity and computational capability. The
PIV Card is the primary component of the PIV system. The cardholder uses the PIV Card for authentication
to access various physical and logical resources.

Additionally, derived PIV credentials increasingly play an important role as supplemental authenticators, especially in environments where use of the PIV Card is not easily supported. These AAL2 and AAL3 authenticators are not embedded in the PIV Card but, rather, are stand-alone or integrated in a variety of devices and platforms. 

Card readers are located at access points for controlled resources to allow a cardholder to gain
physical or logical access using the PIV Card. The reader communicates with a PIV Card to
perform the authentication protocol and relay that information to the access control
systems for granting or denying access.

PIN input devices can be used along with card readers when a higher level of authentication assurance is
required. The cardholder presenting the PIV Card types their PIN into the PIN input device.
For physical access, the PIN is typically entered using a PIN pad device; a keyboard is generally used for
logical access. The input of a PIN provides a "something you know"[^somethingyouknow] authentication factor that
activates[^oncardbiometric] the PIV Card and enables access to other credentials resident on the card that provide
additional factors of authentication. A cryptographic key and certificate, for example, provide an
additional authentication factor of "something you have" (i.e., the card) through PKI-based
authentication.

Biometric capture devices may be located at secure locations where a cardholder may want to gain access. These
devices depend upon the use of the biometric data of the cardholder, stored in the memory of the card, and its
comparison with a real-time captured biometric sample. The use of biometric characteristics provides an additional factor of
authentication ("something you are").


[^somethingyouknow]: For more information on the terms "something you know," "something you have," and "something you are," see [[SP 800-63]](../references/#ref-SP-800-63).
[^oncardbiometric]: Alternatively, a biometric on-card one-to-one comparison can be used to activate the PIV Card.

### 3.1.2 PIV Issuance and Management Subsystem {#s-3-1-2}

The registration and issuance activities in [Figure 3-1](system.md#fig-3-1) start with identity proofing and registration, during which all information and documentation required for enrollment are collected, stored, and maintained. The collected information is subsequently used to personalize and issue the PIV Card, as well as to bind and issue derived PIV credentials as additional PIV authenticators.

The PIV Card is issued to the applicant when all identity proofing, registration, and issuance
processes have been completed. Derived PIV credentials might also be bound, issued, and managed after these processes are complete. 

The PIV Card issuance process focuses on the personalization of the physical (visual
surface) and logical (contents of the ICC) aspects of the card at the time of issuance and maintenance
thereafter. This includes printing photographs, names, and other information on the card and loading the
relevant card applications, biometric data, and other data.

Card writers, which are similar to card readers, personalize and initialize the information stored
on PIV Cards. Card writers may also be used to perform remote PIV Card updates (see [Section 2.9.2](requirements.md#s-2-9-2)).
The data to be stored on PIV Cards includes cardholder information, certificates, cryptographic keys, the
PIN, and biometric data. Biometric capture devices are also part of the identity proofing and registration process that support the PIV Issuance and Management Subsystem.

The PKI component provides services for PKI-based PIV credentials. This component is used throughout the
lifecycle of PIV Cards and PKI-based derived PIV credentials&mdash;from generation and loading of asymmetric keys and PKI credentials, to usage of these keys for secure operations, to eventual reissuance or termination of the PIV Card and associated PKI-based derived PIV credentials. At the personalization phase, the PKI component issues and distributes the digital certificates for the keys generated on-card and keys generated for PKI-based derived PIV credentials. During use of the PIV credentials at authentication, the PKI component provides the
requesting application with the certificate status information of the PKI credentials requesting access.

The enterprise IDMS serves as the central repository for the cardholder's digital identities. It is where the relevant cardholder identity attributes are maintained. The IDMS creates the PIV identity account and associates the cardholder's PIV Card and derived PIV credentials with the account. The account is maintained throughout the cardholder's employment with the department or agency. Various Identity, Credential, and Access Management (ICAM)-related systems connect to the IDMS to request or update cardholder attributes. For example:

  * A security office may provide updated background investigative information to the IDMS.
  * An HR system may relay hiring status updates.
  * The IDMS may serve as the Identity Provider (IdP), authenticating the cardholder on behalf of a Relying Party (RP) and issuing assertions of attributes relating to the PIV identity account to the RP.

Different functions of the IDMS might be provided by different components within the department or agency, or outsourced to a shared service provider. For example, card management functions and recordkeeping may be provided by a different component from the component handling HR records or the component serving as an IdP. Regardless of how these components are implemented, they are collectively responsible for managing the identities of federal employees and contractors who are issued PIV credentials. It is ultimately the responsibility of the issuing department or agency to ensure that the relevant identity attributes, credentials, and records stored across these components are maintained properly and in a timely manner, preferably using technical means and automation whenever possible.

### 3.1.3 PIV Relying Subsystem {#s-3-1-3}

The PIV relying subsystem in [Figure 3-1](system.md#fig-3-1) includes components responsible for determining a particular PIV
cardholder's access to a physical or logical resource.[^DPC] A physical resource is the secured facility (e.g.,
building, room, parking garage) that the cardholder wishes to access. The logical resource is typically a
network or a location on the network (e.g., computer workstation, folder, file, database record, software
program) to which the cardholder wants to gain access. 

[^DPC]: The cardholder may authenticate with the PIV Card or a derived PIV credential.

The relying subsystem depends on authorization mechanisms that define the privileges (authorizations)
possessed by entities requesting to access a particular logical or physical resource. Examples of this include
an Access Control List (ACL) associated with a file on a computer system and a secure E-PACS control panel within a facility.

The PIV relying subsystem becomes relevant when the PIV Card or derived PIV credential is used to authenticate a cardholder who
is seeking access to a physical or logical resource. Although this Standard does not provide technical
specifications for this subsystem, various mechanisms for authentication are defined in
[Section 6](authentication.md#s-6) for PIV Cards and in [[SP 800-157]](references.md#ref-SP-800-157) for derived PIV credentials
to provide consistent and secure means for performing the authentication function preceding an
access control decision.

The relying subsystem identifies and authenticates cardholders either by interacting with the PIV Card using mechanisms discussed in [Section 6](authentication.md#s-6) or 
by communicating with an IdP through a federation protocol as discussed in [Section 7](federation.md#s-7). Once authenticated, authorization mechanisms that support the relying subsystem grant or deny access to resources based on the privileges assigned to the cardholder.

~~~
\clearpage
~~~
{:latex-literal="true"}

## 3.2 PIV Card Lifecycle Activities {#s-3-2}

The PIV Card lifecycle consists of seven activities.[^DPCLifecycle] The activities that take place during fabrication and
pre-personalization of the card at the manufacturer are not considered a part of this lifecycle model.
[Figure 3-2](system.md#fig-3-2) presents these PIV activities and depicts the PIV Card request as the initial activity and PIV
Card termination as the end-of-life activity.

[^DPCLifecycle]: The lifecycle activities of derived PIV credentials are described in [[SP 800-157]](../references/#ref-SP-800-157).

[Figure 3-2. PIV Card Lifecycle Activities](system.md#fig-3-2){:name="fig-3-2"}
{:latex-ignore="true"}

![Diagram of PIV Card lifecycle.]({{site.baseurl}}/{{page.collection}}/images/lifecycle.png 'PIV Card Lifecycle Activities'){:style="width: 1047px;" latex-src="lifecycle.pdf" latex-fig="3-2" latex-place="p"}

The seven card lifecycle activities are as follows:

PIV Card Request
: The initiation of a request for the issuance of a PIV Card
    to an applicant and the validation of this request.

Identity Proofing and Registration
: Verification of the claimed identity of the
    applicant, including verification that the entire set of identity source documents presented at the time of registration is
    valid, capture of biometric characteristics, and creation of the PIV enrollment record.[^enroll]

PIV Card Issuance
: Personalization (physical and logical)
    and issuance of the card to the intended applicant.

PKI Credential Issuance
: Generation of PKI credentials and loading them
    onto the PIV Card.

PIV Card Usage
: Use of the PIV Card to perform cardholder authentication for
    access to a physical or logical resource. Access authorization decisions are made after successful
    cardholder identification and authentication.

PIV Card Maintenance
: Maintenance or update of the physical PIV Card and
    its data. Such data includes various card applications, PINs, PKI credentials, and
    biometric data.

PIV Card Termination
: Permanent destruction or invalidation of the
    PIV Card and the data and keys needed for authentication to prevent any future use of the PIV Card
    for authentication.

[^enroll]: In some other National Institute of Standards and Technology (NIST) documents such as [[SP 800-63A]](../references/#ref-SP-800-63A), registration is referred to as *enrollment*.

~~~
\clearpage
~~~
{:latex-literal="true"}

## 3.3 Connections Between System Components {#s-3-3}

To perform authentication for logical or physical access using a PIV Card or a derived PIV credential directly, the credential is verified and 
attributes from the PIV identity account are provided to the relying subsystem. The connections and data 
flows between these components are shown in [Figure 3-3](system.md#fig-3-3). 

[Figure 3-3. PIV System Connections](system.md#fig-3-3){:name="fig-3-3"}
{:latex-ignore="true"}

![Diagram of connections between components in a PIV system.]({{site.baseurl}}/{{page.collection}}/images/system-direct.png 'PIV System Connections'){:style="width: 1047px;" latex-src="system-direct.pdf" latex-fig="3-3" latex-place="p"}

While it is possible to directly accept a PIV Card issued by another agency, the recommended interoperability mechanism for most agencies 
is to use a federation protocol, as discussed in [Section 7](federation.md#s-7). In this method, the PIV cardholder authenticates to their
IdP, which is part of the PIV Issuance and Management Subsystem, 
using their PIV Card or derived PIV credential. The IdP verifies the credential and determines the attributes 
associated with the PIV identity account. The IdP then creates an assertion that is sent to the
relying subsystem. The RP validates the assertion from the IdP, but the RP never sees the credential
or authentication at the IdP. The connections and data flows between these components are shown in [Figure 3-4](system.md#fig-3-4).

[Figure 3-4. PIV System Federation Connections](system.md#fig-3-4){:name="fig-3-4"}
{:latex-ignore="true"}

![Diagram of connections between components in a federated system using PIV credentials.]({{site.baseurl}}/{{page.collection}}/images/system-federation.png 'PIV System Federation Connections'){:style="width: 1047px;" latex-src="system-federation.pdf" latex-fig="3-4" latex-place="bp"}

While this Standard makes no requirements on when to apply direct or federated authentication mechanisms, there are some
natural mappings. For example, physical access systems tend not to use federation protocols and instead rely on direct authentication. Also,
many derived PIV credentials can only be verified by their issuer and are therefore better suited for use as part of a federation protocol.
