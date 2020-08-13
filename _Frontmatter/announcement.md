---
layout: default
title: Announcement
navOrder: 3
navTitle: Announcement
permalink: /announcement/
---

Federal Information Processing Standards Publications (FIPS PUBS) are issued by the National Institute of Standards and Technology (NIST) after approval by the Secretary of Commerce pursuant to Section 5131 of the Information Technology Management Reform Act of 1996 (Public Law 104-106) and the Computer Security Act of 1987 (Public Law 100-235).

# 1. Name of Standard. {#f-1}

Personal Identity Verification (PIV) of Federal Employees and Contractors (FIPS 201-3).

# 2. Category of Standard. {#f-2}

Information Security. **Subcategory**. Identity.

# 3. Explanation. {#f-3}

Homeland Security Presidential Directive-12 [[HSPD-12]](_Appendix/references.md#ref-HSPD-12), dated August 27, 2004, entitled "Policy for a Common Identification Standard for Federal Employees and Contractors," directs the promulgation of a federal standard for secure and reliable forms of identification for federal employees and contractors. It further specifies secure and reliable identification that

1. is issued based on sound criteria for verifying an individual employee's identity;
2. is strongly resistant to identity fraud, tampering, counterfeiting, and terrorist exploitation;
3. can be rapidly authenticated electronically; and
4. is issued only by providers whose reliability has been established by an official accreditation process.
{: .letter-list}

The directive stipulates that the Standard include graduated criteria from least secure to most secure in order to ensure flexibility in selecting the appropriate level of security for each application. Executive departments and agencies are required to implement the Standard for identification issued to federal employees and contractors in gaining physical access to controlled facilities and logical access to controlled information systems.

# 4. Approving Authority. {#f-4}

Secretary of Commerce.

# 5. Maintenance Agency. {#f-5}

Department of Commerce, NIST, Information Technology Laboratory (ITL).

# 6. Applicability. {#f-6}

This Standard is applicable to identification issued by federal departments and agencies to federal employees and contractors for gaining physical access to federally controlled facilities and logical access to federally controlled information systems, except for "national security systems" as defined by 44 U.S.C. 3542(b)(2) and [[SP 800-59]](_Appendix/references.md#ref-SP-800-59). Except as provided in [[HSPD-12]](_Appendix/references.md#ref-HSPD-12), nothing in this Standard alters the ability of government entities to use the Standard for additional applications.

## 6.1 Special-Risk Security Provision. {#f-6-1}

The U.S. Government has personnel, facilities, and other assets deployed and operating worldwide under a vast range of threats (e.g., terrorist, technical, intelligence), the severity of which is particularly heightened overseas. For cardholders with particularly sensitive threats while outside of the contiguous United States, the issuance, holding, and/or use of PIV credentials with full technical capabilities as described herein may result in unacceptably high risk. In such cases of risk (e.g., to facilities, individuals, operations, national interest, or national security) by the presence and/or use of full-capability PIV credentials, the head of a department or independent agency may issue a select number of maximum-security PIV credentials that do not contain (or otherwise do not fully support) the wireless and/or biometric capabilities otherwise required/referenced herein. To the greatest extent practicable, heads of departments and independent agencies should minimize the issuance of such special-risk security PIV credentials so as to support interagency interoperability and the President's policy. Use of other risk-mitigating technical (e.g., high-assurance on/off switches for the wireless capability) and procedural mechanisms in such situations is preferable and, as such, is also explicitly permitted and encouraged. As protective security technology advances, the need for this provision will be reassessed when the Standard undergoes the normal review and update process.

# 7. Implementations. {#f-7}

This Standard satisfies the control objectives, security requirements, and technical interoperability requirements of [[HSPD-12]](_Appendix/references.md#ref-HSPD-12). The Standard specifies implementation and processes for binding identities to authenticators, such as integrated circuit cards and derived credentials used in the federal
PIV system.

In implementing PIV systems and pursuant to Section 508 of the Rehabilitation Act of 1973 (the Act), as amended, agencies have the responsibility to accommodate federal employees and contractors with disabilities to have access to and use of information and data comparable to the access to and use of such information and data by federal employees and contractors who are not individuals with disabilities. In instances where federal agencies assert exceptions to Section 508 accessibility requirements (e.g., undue burden, national security, commercial non-availability), Sections 501 and 504 of the Act require federal agencies to provide reasonable accommodation for federal employees and contractors with disabilities whose needs are not met by the baseline accessibility provided under Section 508. While Section 508 compliance is the responsibility of federal agencies and departments, this Standard specifies several options to aid in the implementation of the requirements:

+ [Section 4.1.4.3](_FIPS201/frontend.md#s-4-1-4-3) specifies Zones 21F and 22F as options for orientation markers of the PIV Card.
+ [Section 2.8](_FIPS201/requirements.md#s-2-8) and [Section 2.9](_FIPS201/requirements.md#s-2-9) specify alternatives for the biometric capture device interactions required at PIV Card issuance, reissuance, and reset.
+ [Section 2.10](_FIPS201/requirements.md#s-2-10) defines alternatives to smart card-based PIV credentials in the form of derived PIV credentials.
+ [Section 6](_FIPS201/authentication.md#s-6) defines authentication mechanisms with varying characteristics for both physical and logical access (e.g., with or without PIN, over contact, contactless, or virtual contact interface).
+ [Section 7](_FIPS201/federation.md#s-7) defines federation as a means for a relying system to interoperate with credentials issued by other agencies.

The Office of Management and Budget (OMB) provides implementation oversight for this Standard. 

PIV cards can only be issued by accredited issuers. The responsibility and authority for PIV card issuance and management rests in the  departments and agencies employing federal employees and contractors regardless of whether these functions are performed in-house or outsourced to an external public or private organization. To ensure consistency in the operations of issuers, NIST provides guidelines for the accreditation of PIV Card issuers and derived PIV credential issuers in [[SP 800-79]](_Appendix/references.md#ref-SP-800-79). The Standard also covers security and interoperability requirements for PIV Cards. For this purpose, NIST has established the PIV Validation Program, which tests implementations for conformance with this Standard as specified in [[SP 800-73]](_Appendix/references.md#ref-SP-800-73) and [[SP 800-78]](_Appendix/references.md#ref-SP-800-78) (see [Appendix A.3](_Appendix/accreditation.md#s-a-3)).

FIPS 201 compliance of PIV components and subsystems is provided in accordance with OMB [[M-19-17]](_Appendix/references.md#ref-OMB1917) through products and services from the U.S. General Services Administration's (GSA) Interoperability Test Program and Approved Products and Services List (see [Appendix A.5](_Appendix/accreditation.md#s-a-5)). Implementation guidance for PIV-enabled federal facilities and information systems in accordance with OMB [[M-19-17]](_Appendix/references.md#ref-OMB1917) will be outlined by [[FICAM]](_Appendix/references.md#ref-FICAM) as playbooks and best practice repositories. See also [[SP 800-116]](_Appendix/references.md#ref-SP-800-116) and [[ISC-RISK]](_Appendix/references.md#ref-ISC-RISK).

# 8. Patents. {#f-8}

Aspects of the implementation of this Standard may be covered by U.S. or foreign patents.

# 9. Effective Date. {#f-9}

This Standard will be effective immediately upon final publication of this revision, superseding FIPS 201-2. Features of this Standard that depend upon the release of new or revised NIST Special Publications, including features that are optional, deprecated, or removed, are effective upon final publication of the supporting Special Publications.

# 10. Specifications. {#f-10}

Federal Information Processing Standards (FIPS) 201
Personal Identity Verification (PIV) of Federal Employees and Contractors.

# 11. Qualifications. {#f-11}

The security provided by the PIV system is dependent on many factors outside the scope of this Standard. Organizations must be aware that the overall security of the personal identification system relies on

+ assurance provided by the issuer of an identity credential that the individual in possession of the credential has been correctly identified;
+ protection provided to an identity credential stored within the PIV Card and transmitted between the card and the PIV issuance and relying subsystems;
+ infrastructure protection provided for derived PIV credential in the binding, maintenance and use of the identity credential; and
+ protection provided to the identity verification system infrastructure and components throughout the entire lifecycle.

Although it is the intent of this Standard to specify mechanisms and support systems that provide high assurance personal identity verification, conformance to this Standard does not assure that a particular implementation is secure. It is the implementer's responsibility to ensure that components, interfaces, communications, storage media, managerial processes, and services used within the identity verification system are designed and built in a secure manner.

Similarly, the use of a product that conforms to this Standard does not guarantee the security of the overall system in which the product is used. The responsible authority in each department and agency must ensure that an overall system provides the acceptable level of security.

Because a standard of this nature must be flexible enough to adapt to advancements and innovations in science and technology, NIST has a policy to review this Standard within five years to assess its adequacy.

# 12. Waiver Procedure. {#f-12}

FISMA does not allow for waivers to a FIPS that is made mandatory by the Secretary of Commerce.

# 13. Where to Obtain Copies of the Standard. {#f-13}

This publication is available through the internet by accessing <https://csrc.nist.gov/publications/>. Other computer security publications are available at the same website.
