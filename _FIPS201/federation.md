---
layout: default
title: Federation Considerations for PIV
navOrder: 7
navTitle: Federation
permalink: /federation/
---

# Federation Considerations for PIV

Federation protocols allow a trusted identity provider (IdP) to proclaim a subscriber's identity to a relying party (RP) across a network in a trusted and verifiable fashion. The process and requirements for federation systems are discussed in depth in [[SP 800-63C]](#ref-sp-800-63c). 

## Why a PIV Credential is Not Federation




While it may seem like accepting the PIV certificates of another organization is a type of federation, this fails the basic definitions of using a federation protocol. Instead, the certificate of the PIV card represents a _credential_, which is the combination of an authenticator with some subscriber attributes. This certificate, and its associated keys, are used many times at different RP's without modification. However, a federation protocol relies on an _assertion_, which is created on a per-login basis based on the subscriber's log in at an IdP. This assertion is created in reaction to the login request, and it is targeted specifically to the RP. 

This fact allows an assertion to contain a stable identifier for a given subscriber that is consistent across many different authenticators, including different PIV cards and certificates, without affecting any identifiers bound into those authenticators themselves. Additionally, since the assertion is short-lived and created for a single authentication event, as long as the RP confirms that the certificate presented is the same as the one in the assertion, the RP does not need to process CRL's or OCSP to check certificate validity itself. 

## How to Use Federation with PIV

The PIV is used as an authenticator to log the subscriber in to the IdP. The IdP then associates this login with an account and a set of attributes for the subscriber, and then creates an assertion for the user at the RP. This assertion is unique for the login request and targeted specifically to the RP. The RP parses and validates the assertion, and uses the unique identifier provided in the assertion to associate the subscriber with any local account or rights information needed for the application to operate. 

### Reaching FAL3

While FAL3 is not required for the vast majority of use cases, an IdP can reach FAL3 by using a PIV certificate as the primary authenticator and then asserting a reference to that certificate, such as its fingerprint, in the resulting assertion. The RP then has the ability to prompt the subscriber for that authenticator directly in addition to the incoming assertion. This proves that the referenced subscriber has access to a specified key, which is required for FAL3.

Note that the RP is not operating at FAL3 unless it verifies that the subscriber's PIV certificate is in fact the certificate listed in the assertion. The RP does not need to validate the certificate's signature chain or any other information, nor does the RP need to rely on any attributes within the certificate to identify the subscriber. The validity of the account, the liveness of the authentication event, and the attributes of the subscriber are all managed by the IdP directly.

## Benefits of Using Federation with PIV

### Simplified RPs

Since the IdP is the only party validating the certificate, it is the only party that needs to check CRLs, OCSP, or other liveness mechanisms for the certificate. The IdP is also the only application that needs to deploy mutual TLS for certificate prompting and verification. The IdP can also incorporate additional and alternative credential mechanisms, including Derived PIV credentials and multi-factor authentication. 

### Attribute Collection

The user attributes available from a PIV certificate are limited, and once the card has been issued, cannot be easily modified. If an attribute needs to be changed, a new certificate must be issued for the subscriber. This heavyweight process is often problematic for subscribers and RPs alike. With a federation protocol, changes in the subscriber's attributes can be asserted on the next login, separate from any credential used to log in to the IdP. 

This approach also allows for greater privacy protection of the subscriber. When a PIV certificate is presented, all of the subscriber's attributes are included regardless of whether the RP needs them for processing or not. With a federation protocol, the IdP and RP can negotiate which attributes are included with the assertion (or through an _authorization component_, which gives the RP access to even more attributes on an as-needed basis). 

### Account Lifetime Verification

Because the IdP is checking the validity of the certificate, and therefore the validity of the associated account, the RP can depend on the IdP for managing this. If an account has been revoked, the IdP will no longer create assertions for it. 

The RP and IdP may want to use a provisioning or signaling protocol to proactively communicate account status, allowing the RP to purge information and access for accounts no longer available from the IdP. 

### Session Management

With traditional PIV-based login systems, the server is often configured to require presentation of the certificate on every request. For user-facing web sites, this causes the unintended side effect of the certificate needing to remain unlocked during the use of the site. This has led to the prevalence of cached PINs in management software. The caching of that PIN by intermediate software allows the user to not enter the PIN on every request (which would be prohibitive). Since the requirement of a PIN to unlock the certificate is intended to prove the correct user's presence, the use of a cache hides the fact that the user may not be present after all during the cache's validity. 

With a federation protocol, the RP can switch to explicit session management techniques after processing the assertion. Once the RP has processed the assertion, it can use local session management techniques like browser cookies to bind the subscriber's future actions with the logged in account, without the need for the subscriber's PIV certificate to be presented again. If the RP decides that it needs the subscriber to prove their presence and validity again at any time, for any reason, the RP can require the subscriber to log in again at the the IdP. This results in a fresh assertion, which the RP can then associate with the subscriber's session. 

### Stable Identifiers

When the subscriber's PIV certificate is renewed, or any attributes change, an entirely new certificate is issued to the subscriber. If the RP had been using the certificate to uniquely identify the subscriber, the new certificate will appear to be a new subscriber to the RP. This puts the RP in the awkward position of doing back-end identification of the subscriber across multiple credentials. 

With a federation protocol, the IdP can assign a stable identifier to a subscriber's account that can be associated with different authenticators -- which is to say, different PIV certificates -- over time. 

### Additional Authenticators

With a federation protocol, the RP sees only the result of the federation process in the form of the assertion. All of the subscriber's authenticators are managed by the IdP. This allows the IdP to associate multiple authenticators with the subscriber's account. 

The authenticators used during a login request can be communicated from the IdP to the RP by means of technologies such as Vectors of Trust. 

### Delegation

The PIV certificate is designed to be presented and verified directly, which makes it difficult to use on mobile devices or other systems that don't have ready access to smart card readers. The PIV can be used in a federation protocol like OpenID Connect to generate OAuth access tokens, which can then in turn be used to access APIs on behalf of the subscriber.