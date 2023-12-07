---
layout: default
title: PIV Front-End Subsystem
navOrder: 7
navTitle: Front-End
permalink: /frontend/
anchor: s-4
section: 4
---

# 4. PIV Front-End Subsystem {#s-4}

_This section is normative._ It provides the requirements for the PIV front-end subsystem components.

## 4.1 PIV Card Physical Characteristics {#s-4-1}

References to the PIV Card in this section pertain to its physical characteristics only. References to the
front of the card apply to the side of the card that contains electronic contacts. References to the back
of the card apply to the side opposite the front.

The PIV Card's physical appearance and other characteristics should balance the need to have the PIV
Card commonly recognized as a federal identification card while providing the flexibility to support
individual department and agency requirements. Having a common look for PIV Cards is important in
meeting the objectives of improved security and interoperability. In support of these objectives,
consistent placement of printed components and technology is necessary.

The PIV Card **SHALL** comply with the physical characteristics described in [[ISO 7810]](references.md#ref-ISO7810),
[[ISO 10373]](references.md#ref-ISO10373), and [[ISO 7816]](references.md#ref-ISO7816) for contact cards in addition to
[[ISO 14443]](references.md#ref-ISO14443) for contactless cards.

### 4.1.1 Printed Material {#s-4-1-1}

The printed material **SHALL NOT** rub off during the life of the PIV Card. The printing process **SHALL NOT** 
deposit debris on the printer rollers during printing and laminating. Printed material **SHALL NOT** interfere
with the ICCs or related components, nor **SHALL** it obstruct access to machine-readable information.

### 4.1.2 Tamper-proofing and Resistance {#s-4-1-2}

To combat counterfeiting and alterations, the PIV Card **SHALL** contain security features outlined in the American Association of Motor Vehicle Administrators (AAMVA) Drivers License/Identification Card (DL/ID) Card Design Standard [[CDS]](references.md#ref-CDS). The Card Design Standard classifies security features into three categories, depending on the inspection level required for verification:

Inspection Level 1
: Security features that can be examined without tools or aids and include easily identifiable visual or tactile features for rapid inspection at point of usage. Examples include an embossed surface pattern, an optically variable device (such as a hologram), or color-shifting inks.

Inspection Level 2
: Security features that require the use of a tool or instrument (e.g., UV light, magnifying glass, or scanner) to discern. Examples include microtext, UV-fluorescent images, IR-fluorescent ink, nano and micro images, and chemical taggants.

Inspection Level 3
: Security features inspected by forensic specialists to conduct in-depth examination that may require special equipment to provide true certification.

A PIV Card **SHALL** incorporate at least one security feature at inspection level 1 or inspection level 2. Federal departments and agencies **SHOULD** incorporate additional security features and include all three inspection levels.

Incorporation of security features **SHALL**

- be in accordance with durability requirements;
- be free of defects, such as fading and discoloration;
- not obscure printed information; and
- not impede access to machine-readable information.

All security features **SHOULD** maintain their function for the life of the card. As a generally accepted security procedure, federal departments and agencies **SHOULD** periodically review the viability, effectiveness, and currency of employed tamper resistance and anti-counterfeiting methods.

### 4.1.3 Physical Characteristics and Durability {#s-4-1-3}

This section describes the physical requirements for the PIV Card.

The PIV Card **SHALL** contain a contact and a contactless ICC interface.

The card body **SHALL** be white in accordance with color representation in [Section 4.1.5](frontend.md#s-4-1-5). Only
security features, as described in [Section 4.1.2](frontend.md#s-4-1-2), may modify the perceived color slightly. The presence of
security features **SHALL NOT** prevent the recognition of white as the principal card body color by a person
with normal vision (corrected or uncorrected) at a working distance of 50&nbsp;cm to 200&nbsp;cm.

The card body structure **SHALL** consist of card materials that satisfy the card characteristics in
[[ISO 7810]](references.md#ref-ISO7810) and test methods in [[ANSI 322]](references.md#ref-ANSI322).
Although the [[ANSI 322]](references.md#ref-ANSI322) test methods do not currently specify compliance requirements, the tests
**SHALL** be used to evaluate card material durability and performance. These tests
**SHALL** include card flexure, static stress, plasticizer exposure, impact resistance, card structural
integrity, surface abrasion, temperature and humidity-induced dye migration, ultraviolet light
exposure, and laundry test. Cards **SHALL NOT** malfunction or delaminate after hand cleaning with a
mild soap and water mixture.

Sample cards **SHALL** be subjected to sunlight exposure in accordance with Section 5.12 of [[ISO 10373]](references.md#ref-ISO10373)
or to ultraviolet and daylight fading exposure in accordance with [[ANSI 322]](references.md#ref-ANSI322).
Sunlight exposure in accordance with [[ISO 10373]](references.md#ref-ISO10373) **SHALL** be in the
form of actual, concentrated, or artificial sunlight that appropriately reflect 2&thinsp;000&nbsp;hours of 
southwestern United States' sunlight. 
Concentrated sunlight exposure **SHALL** be performed in accordance with [[G90-17]](references.md#ref-G90-17) and accelerated 
exposure in accordance with [[G155-2013]](references.md#ref-G155-2013). Sample cards
**SHALL** be subjected to the
[[ISO 10373]](references.md#ref-ISO10373) dynamic bending test and **SHALL** have no visible 
cracks or failures after the [[ISO 10373]](references.md#ref-ISO10373) or [[ANSI 322]](references.md#ref-ANSI322) exposure. 

There are methods by which proper card orientation can be indicated. [Section 4.1.4.3](frontend.md#s-4-1-4-3), for example,
defines Zones 21F and 22F, where card orientation features **MAY** be applied.[^orientation] Note: If an agency
determines that tactilely discernible markers for PIV Cards impose an undue burden, the agency
**SHALL** implement policies and procedures to accommodate employees and contractors with disabilities
in accordance with Sections 501 and 504 of the Rehabilitation Act.

The card **SHALL** be 27&nbsp;mil to 33&nbsp;mil (0.68&nbsp;mm to 0.84&nbsp;mm) thick before lamination, in accordance with [[ISO 7810]](references.md#ref-ISO7810).

The PIV Card **SHALL NOT** be embossed other than for security and accessibility features.

Decals **SHALL NOT** be adhered to the card.

Departments and agencies **MAY** choose to punch an opening in the card body to enable the card to be
oriented by touch or to be worn on a lanyard. Departments and agencies should ensure such
alterations are closely coordinated with the card vendor and manufacturer to ensure the card
material integrity and printing process are not adversely impacted. Departments and agencies
**SHOULD** ensure such alterations do not

- compromise card body durability requirements and characteristics;
- invalidate card manufacturer warranties or other product claims;
- alter or interfere with printed information, including the photograph; or
- damage or interfere with machine-readable technology, such as the embedded antenna.

The card material **SHALL** withstand the effects of temperatures required by the application of a polyester
laminate on one or both sides of the card by commercial off-the-shelf (COTS) equipment. The
thickness added due to a laminate layer **SHALL NOT** interfere with the smart card reader operation. The
card material **SHALL** allow production of a flat card in accordance with [[ISO 7810]](references.md#ref-ISO7810) after lamination of
one or both sides of the card.

[^orientation]: For some individuals, the contact surface for the ICC may be sufficient for determining the orientation of the card.

### 4.1.4 Visual Card Topography {#s-4-1-4}

The information on a PIV Card **SHALL** be in visual printed and electronic form. This section covers the
placement of visual and printed information. It does not cover information stored in electronic form, such
as stored data elements or other possible machine-readable technologies. Logically stored data
elements are discussed in [Section 4.2](frontend.md#s-4-2).

As noted in [Section 4.1.3](frontend.md#s-4-1-3), the PIV Card **SHALL** contain a contact and a contactless ICC interface. This
Standard does not specify the number of chips used to support the mandated
contact and contactless interfaces.

To achieve a common PIV Card appearance and provide departments and agencies with the flexibility to
augment the card with department- or agency-specific requirements, the card **SHALL** contain 
printed information and machine-readable technologies. Mandated and
optional items **SHALL** be placed as described and depicted. Printed data **SHALL NOT** interfere with
machine-readable technology.

Areas that are marked as reserved **SHOULD NOT** be used for printing. The reason for the recommended
reserved areas is that placement of the embedded contactless ICC module may vary between
manufacturers, and there are constraints that prohibit printing over the embedded contactless module. The
PIV Card topography provides flexibility for placement of the embedded module, either in the upper
right corner or in the lower portion. Printing restrictions apply only to the area where the
embedded module is located.

Unless otherwise specified, all data labels **SHALL** be printed in 5&nbsp;pt Arial with the corresponding
data in 6&nbsp;pt Arial Bold.
If the Arial font is not available, a visually similar font, such as Public Sans [[PublicSans]](references.md#ref-PublicSans), **MAY** 
be substituted for all references to Arial within this Standard. If such a substitution is made, the substitution
**SHALL** be consistently applied to all uses of the Arial font on the PIV Card.
Unless otherwise specified, all text **SHALL** be printed in black.

#### 4.1.4.1 Mandatory Items on the Front of the PIV Card {#s-4-1-4-1}

Zone 1F: Photograph
: The photograph **SHALL** be placed in the upper left corner, as depicted in [Figure 4-1](frontend.md#fig-4-1),
    and be a frontal pose from top of the head to shoulder. A minimum of 300&nbsp;dots per inch (DPI)
    resolution **SHALL** be used. The background **SHALL** follow recommendations set forth in [[SP 800-76]](references.md#ref-SP-800-76).

~~~
\clearpage
~~~
{:latex-literal="true"}

Zone 2F: Name
: The full name[^pseudonym] **SHALL** be printed directly under the photograph in capital letters from the American Standard Code for Information Interchange (ASCII) character set specified in [[RFC 20]](references.md#ref-RFC20). The
    full name **SHALL** be composed of a primary identifier (i.e., surnames or family names) and a secondary
    identifier (i.e., pre-names or given names). The printed name **SHALL** match the name on the identity source
    documents provided during identity proofing and registration to the extent possible. The full name **SHALL**
    be printed in the PRIMARY IDENTIFIER, SECONDARY IDENTIFIER format. The entire full name **SHOULD** be
    printed on available lines of Zone 2F and either identifier **MAY** be wrapped. The wrapped identifier **SHALL**
    be indicated with the "&gt;" character at the end of the line. The identifiers **MAY** be printed on separate lines if
    each fits on one line. Departments and agencies **SHALL** use the largest font in the range of 7&nbsp;pt to 10&nbsp;pt Arial Bold that allows
    the full name to be printed. Using 7&nbsp;pt Arial Bold allows space for three lines and **SHALL** only be used if the full
    name does not fit on two lines in 8&nbsp;pt Arial Bold. [Table 4-1](frontend.md#table-4-1) provides examples of separate primary
    and secondary identifier lines, single line with identifiers, wrapped full names, and the full name in three
    lines. Note that truncation **SHOULD** only occur if the full name cannot be printed in 7&nbsp;pt Arial Bold.
    
    Names in the primary identifier and the first name in the secondary identifier **SHALL NOT** be abbreviated.
    If other names and conventional prefixes and suffixes are included, they **SHALL** be included in the secondary identifier and
    **MAY** be abbreviated. The special character "." (period) **SHALL** indicate such abbreviations, as shown in
    [Figure 4-2](frontend.md#fig-4-2). Other uses of special symbols (e.g., the apostrophe in "O'BRIEN") are at the discretion of the issuer.

[Table 4-1. Name Examples](frontend.md#table-4-1){:name="table-4-1"}
{:latex-ignore="true"}

|Name|Characteristics|Example|
|---|---|---|
|John Doe|Simple full name of individual who does not have a middle name, two lines sufficient at 10&nbsp;pt.|![Graphical depiction of the name "John Doe".]({{site.baseurl}}/{{page.collection}}/images/name1.png){:style="width: 400px;" latex-src="name1.pdf"}|
|Anna Maria Eriksson|Simple full name, two lines sufficient at 10&nbsp;pt.|![Graphical depiction of the name "Anna Maria Eriksson".]({{site.baseurl}}/{{page.collection}}/images/name2.png){:style="width: 400px;" latex-src="name2.pdf"}|
|Anna Maria Eriksson|Simple full name with abbreviated middle name, two lines sufficient at 10&nbsp;pt.|![Graphical depiction of the name "Anna Maria Eriksson".]({{site.baseurl}}/{{page.collection}}/images/name3.png){:style="width: 400px;" latex-src="name3.pdf"}|
|Anna Maria Eriksson|Simple full name, one line sufficient for full name at 10&nbsp;pt.|![Graphical depiction of the name "Anna Maria Eriksson".]({{site.baseurl}}/{{page.collection}}/images/name4.png){:style="width: 400px;" latex-src="name4.pdf"}|
|Susie Margaret Smith-Jones|Longer full name in two lines, sufficient space at 10&nbsp;pt.|![Graphical depiction of the name "Susie Margaret Smith-Jones".]({{site.baseurl}}/{{page.collection}}/images/name5.png){:style="width: 400px;" latex-src="name5.pdf"}|
|Susie Margaret Smith-Jones|Longer full name wrapped, two lines sufficient at 10&nbsp;pt.|![Graphical depiction of the name "Susie Margaret Smith-Jones".]({{site.baseurl}}/{{page.collection}}/images/name6.png){:style="width: 400px;" latex-src="name6.pdf"}|
|Chayapa Dejthamrong Krusuang Nilavadhanananda|Longer full name wrapped, two lines not sufficient at 10&nbsp;pt. Reduce to 8&nbsp;pt.|![Graphical depiction of the name "Chayapa Dejthamrong Krusuang Nilavadhanananda".]({{site.baseurl}}/{{page.collection}}/images/name7.png){:style="width: 400px;" latex-src="name7.pdf"}|
|Vaasa Silvaan Beenelong Wooloomooloo Warrandyte Warwarnambool|Longer full name, two lines not sufficient at 8&nbsp;pt, 7&nbsp;pt allows sufficient space for three lines in Zone 2F.|![Graphical depiction of the name "Vaasa Silvaan Beenelong Wooloomooloo Warrandyte Warwarnambool".]({{site.baseurl}}/{{page.collection}}/images/name8.png){:style="width: 400px;" latex-src="name8.pdf"}|
|Vaasa Silvaan Beenelong Wooloomooloo Warrandyte Warwarnambool|Same as previous but full name is wrapped.|![Graphical depiction of the name "Vaasa Silvaan Beenelong Wooloomooloo Warrandyte Warwarnambool".]({{site.baseurl}}/{{page.collection}}/images/name9.png){:style="width: 400px;" latex-src="name9.pdf"}|
|Dingo Pontooroomooloo Vaasa Silvaan Beenelong Wooloomooloo Warrandyte Warwarnambool|Truncated full name, three lines at 7&nbsp;pt not sufficient.|![Graphical depiction of the name "Dingo Pontooroomooloo Vaasa Silvaan Beenelong Wooloomooloo Warrandyte Warwarnambool".]({{site.baseurl}}/{{page.collection}}/images/name10.png){:style="width: 400px;" latex-src="name10.pdf"}|
{:latex-columns="p@0.28\textwidth,p@0.38\textwidth,m@0.25\textwidth" latex-table="4-1" latex-caption="Name Examples" latex-place="p"}

Zone 7F: Contact Area
: The electronic contact interface for the card as defined by [[ISO 7816]](references.md#ref-ISO7816). Printed items
    **SHALL NOT** cover the contact surface. The total size of the contact surface can vary between manufacturers. The area shown
    in [Figure 4-1](frontend.md#fig-4-1) roughly represents the minimal possible size.

Zone 8F: Employee Affiliation
: An employee affiliation **SHALL** be printed on the card as depicted in 
    [Figure 4-1](frontend.md#fig-4-1). Examples of employee affiliation include "Employee," "Contractor," "Active Duty," and
    "Civilian."

Zone 10F: Agency, Department, or Organization
: The organizational affiliation **SHALL** be printed as
    depicted in [Figure 4-1](frontend.md#fig-4-1).

~~~
\clearpage
~~~
{:latex-literal="true"}

Zone 14F: Card Expiration Date
: The card expiration date **SHALL** be printed on the card as depicted in
    [Figure 4-1](frontend.md#fig-4-1). The card expiration date **SHALL** be in a YYYYMMMDD format. The YYYY characters
    represent the four-digit year; the DD characters represent the two-digit day of the month; and the MMM characters
    represent the three-letter month abbreviation as follows: JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG,
    SEP, OCT, NOV, and DEC. The Zone 14F expiration date **SHALL** be printed in 6&nbsp;pt to 9&nbsp;pt Arial Bold.

Zone 15F: Color-Coding for Employee Affiliation
: Color-coding **SHALL** be used for additional
    identification of employee affiliation as a background color for Zone 2F (name) as depicted in [Figure 4-1](frontend.md#fig-4-1),
    [Figure 4-3](frontend.md#fig-4-3), and [Figure 4-4](frontend.md#fig-4-4). The following color scheme **SHALL** be used:

    - blue: foreign national,
    - white: government employee, or
    - green: contractor.

    Foreign national color-coding has precedence over government employee and contractor color-coding.
    These colors **SHALL** be reserved and **SHALL NOT** be employed for other purposes. These colors **SHALL** be
    printed in accordance with the color specifications provided in [Section 4.1.5](frontend.md#s-4-1-5). Zone 15F **MAY** be a solid or
    patterned line at the department or agency's discretion.

Zone 18F: Color Code for Employee Affiliation
: The affiliation color codes "B" for blue, "W" for white, and "G" for
    green **SHALL** be printed in a white circle on the right side of Zone 15F, as depicted in [Figure 4-1](frontend.md#fig-4-1). The diameter of the circle
    **SHALL NOT** be more than 5&nbsp;mm. The lettering **SHALL** correspond to the printed color in Zone 15F.

Zone 19F: Card Expiration Date
: The card expiration date **SHALL** be printed in a MMMYYYY format in
    the upper right-hand corner as depicted in [Figure 4-1](frontend.md#fig-4-1). The YYYY characters
    represent the four-digit year and the MMM characters
    represent the three-letter month abbreviation as follows: JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG,
    SEP, OCT, NOV, and DEC. The Zone 19F expiration date **SHALL** be printed in
    12&nbsp;pt Arial Bold.

[^pseudonym]: Alternatively, an authorized pseudonym as provided under the law as discussed in [Section 2.8.1](../requirements/#s-2-8-1).

#### 4.1.4.2 Mandatory Items on the Back of the PIV Card {#s-4-1-4-2}

Zone 1B: Agency Card Serial Number
: This item **SHALL** be printed on the back of the card and contain
    the unique serial number from the issuing department or agency. The format **SHALL** be at the discretion of
    the issuing department or agency. The preferred placement is as depicted in [Figure 4-6](frontend.md#fig-4-6), 
    but variable placement along the outer edge is allowed in accordance with
    other FIPS 201 requirements, as shown in [Figure 4-8](frontend.md#fig-4-8).

Zone 2B: Issuer Identification Number
: This item **SHALL** be printed as depicted in [Figure 4-6](frontend.md#fig-4-6) and consist
    of six characters for the department code, four characters for the agency code, and a five-digit number
    that uniquely identifies the issuing facility within the department or agency.

#### 4.1.4.3 Optional Items on the Front of the PIV Card {#s-4-1-4-3}

This section contains a description of the optional information and machine-readable technologies that
may be used as well as their respective placement. The storage capacity of all optional technologies is as
prescribed by individual departments and agencies and is not addressed in this Standard. Although the
items discussed in this section are optional, if used, they **SHALL** be placed on the card as designated in the
examples provided and as noted.

Zone 3F: Signature
: If used, the department or agency **SHALL** place the cardholder signature below the
    photograph and cardholder name, as depicted in [Figure 4-3](frontend.md#fig-4-3). The space for the signature **SHALL NOT** interfere
    with the placement of the ICCs and related components. Because of card surface space constraints, placement of a
    signature may limit the size of the optional two-dimensional bar code.

Zone 4F: Agency-Specific Text Area
: If used, this area can be used for printing agency-specific
    requirements, such as employee status, as shown in [Figure 4-2](frontend.md#fig-4-2).
    Note that this zone overlaps with an area that some card manufacturers might not allow to be used for printing.

Zone 5F: Rank
: If used, the cardholder's rank **SHALL** be printed in the area, as illustrated in [Figure 4-2](frontend.md#fig-4-2).
    Data format is at the department or agency's discretion.

Zone 6F: Portable Data File (PDF) 417 Two-Dimensional Bar Code (Deprecated)
: This bar code is deprecated in this version of the Standard. In a future version of this Standard, the bar code may be removed. If used, the PDF bar code **SHALL** be placed in the general area depicted in [Figure 4-4](frontend.md#fig-4-4) (i.e., left side of the card). If Zone 3F (a cardholder signature) is used, the size of the PDF bar code may be affected. The card issuer **SHALL** confirm that a PDF used in
    conjunction with a PIV Card containing a cardholder signature will satisfy the anticipated PDF data storage requirements. 
    Note that this zone overlaps with an area that some card manufacturers might not allow to be used for printing.

~~~
\clearpage
~~~
{:latex-literal="true"}

Zone 9F: Header
: If used, the text "United States Government" **SHALL** be placed as depicted in 
    [Figure 4-3](frontend.md#fig-4-3), [Figure 4-4](frontend.md#fig-4-4), and [Figure 4-5](frontend.md#fig-4-5). Departments and agencies **MAY** instead use this zone for other department or agency-specific
    information, such as identifying a federal emergency responder role, as depicted in [Figure 4-2](frontend.md#fig-4-2). 
    Some examples of official roles are "Law Enforcement," "Fire Fighter," and "Emergency Response Team (ERT)."

Zone 11F: Agency Seal
: The Agency seal in Zone 11F may become a mandatory field in the next revision of the Standard. If used, the seal selected by the issuing department, agency, or organization
    **SHALL** be printed in the area depicted. It **SHALL** be printed using the guidelines provided in [Figure 4-2](frontend.md#fig-4-2) to
    ensure that information printed on the seal is legible and clearly visible.

Zone 12F: Footer
: If the PIV Card is used to identify a federal emergency response official,
    a department or agency **SHALL** print "Federal Emergency Response Official" as depicted in
    [Figure 4-2](frontend.md#fig-4-2). The label **SHOULD** be in white lettering on a red background. Additional information
    regarding the federal emergency responder role **MAY** be included in Zone 9F, as depicted in [Figure 4-2](frontend.md#fig-4-2).
    
    When Zone 15F indicates foreign national affiliation and the department or agency does not need to
    highlight emergency response official status, Zone 12F **MAY** be used to denote the country or countries of
    citizenship. If so used, the department or agency **SHALL** print the country name or the three-letter country
    abbreviation (alpha-3 format) in accordance with [[ISO 3166]](references.md#ref-ISO3166). [Figure 4-4](frontend.md#fig-4-4)
    illustrates an example of using country abbreviations for a card issued to a foreign national.
    
    Note that this zone overlaps with an area that some card manufacturers might not allow to be used for printing.

Zone 13F: Issue Date
: If used, the card issuance date **SHALL** be printed above the Zone 14F expiration
    date in YYYYMMMDD format, as depicted in [Figure 4-3](frontend.md#fig-4-3). The YYYY characters
    represent the four-digit year; the DD characters represent the two-digit day of the month; and the MMM characters
    represent the three-letter month abbreviation as follows: JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG,
    SEP, OCT, NOV, and DEC.

Zone 16F: Photograph Border
: A border **MAY** be used with the photograph to further identify employee affiliation,
    as depicted in [Figure 4-3](frontend.md#fig-4-3). This border **MAY** be used in conjunction with Zone 15F to enable departments
    and agencies to develop various employee categories. The photograph border **SHALL NOT** obscure the photograph. The
    border **MAY** be a solid or patterned line. For solid and patterned lines the following colors **SHALL** be reserved: red for emergency
    response officials, blue for foreign nationals, and green for contractors. All other colors **MAY** be used at
    the department or agency's discretion.

Zone 17F: Agency-Specific Data
: In cases where other defined optional elements are not used, Zone
    17F **MAY** be used for other department or agency-specific information, as depicted in [Figure 4-5](frontend.md#fig-4-5).

Zone 20F: Organizational Affiliation Abbreviation
: The organizational affiliation abbreviation **MAY** be
    printed in the upper right-hand corner below the Zone 19F expiration date as shown in [Figure 4-2](frontend.md#fig-4-2). If
    printed, the organizational affiliation abbreviation **SHALL** be printed in 12&nbsp;pt Arial Bold.

Zone 21F: Edge Ridging or Notched Corner Tactile Marker
: If used, this area **SHALL** incorporate edge
    ridging or a notched corner to indicate card orientation, as depicted in [Figure 4-4](frontend.md#fig-4-4). Departments and
    agencies **SHOULD** closely coordinate such alterations with the card vendor and manufacturer
    to ensure that the card material integrity and printing process are not adversely impacted.

Zone 22F: Laser Engraving Tactile Marker
: If used, tactilely discernible marks **SHALL** be created using
    laser engraving to indicate card orientation, as depicted in [Figure 4-4](frontend.md#fig-4-4). There **SHALL** be an opening in the
    lamination foil where laser engraving is performed. Departments and agencies **SHOULD** closely coordinate such
    alterations with the card vendor and manufacturer to ensure that the card material
    integrity and printing process are not adversely impacted.

#### 4.1.4.4 Optional Items on the Back of the PIV Card {#s-4-1-4-4}

Zone 3B: Magnetic Stripe (Deprecated)
: The magnetic stripe is deprecated in this version of the Standard. In a future version of this Standard, the magnetic stripe may be removed and the space may be allocated for agency-specific data to be printed.
    If used, the magnetic stripe **SHALL** be high coercivity and placed in accordance
    with [[ISO 7811]](references.md#ref-ISO7811), as illustrated in [Figure 4-8](frontend.md#fig-4-8).

Zone 4B: Return Address
: If used, the "return if lost" language **SHALL** be placed on the back of
    the card in the general area depicted in [Figure 4-7](frontend.md#fig-4-7).

~~~
\clearpage
~~~
{:latex-literal="true"}

Zone 5B: Physical Characteristics of Cardholder
: If used, the cardholder physical characteristics (e.g.,
    height, eye color, hair color) **SHALL** be printed in the general area illustrated in [Figure 4-7](frontend.md#fig-4-7).

Zone 6B: Additional Language for Emergency Response Officials
: Departments and agencies **MAY**
    choose to provide additional information to identify emergency response officials or to better identify the
    cardholder's authorized access. If used, this additional text **SHALL** be in the general area depicted in [Figure 4-7](frontend.md#fig-4-7) and **SHALL NOT** interfere with other printed text or machine-readable components. An example of a printed statement
    is provided in [Figure 4-7](frontend.md#fig-4-7).

Zone 7B: Section 499, Title 18 Language
: If used, standard Section 499, Title 18, language
    warning against counterfeiting, altering, or misusing the card **SHALL** be printed in the general area depicted
    in [Figure 4-7](frontend.md#fig-4-7).

Zone 8B: Linear 3 of 9 Bar Code (Deprecated)
: The bar code is deprecated in this version of the Standard. In a future version of this Standard, the bar code may be removed. If used, a linear 3 of 9 bar code **SHALL** be placed in the area depicted
    in [Figure 4-8](frontend.md#fig-4-8). It **SHALL** be in accordance with Association for Automatic Identification and Mobility (AIM)
    standards. Beginning and end points of the bar code will depend on the embedded contactless
    module selected. Departments and agencies are encouraged to coordinate placement of the bar code with
    the card vendor and manufacturer.

Zone 9B and Zone 10B: Agency-Specific Text
: In cases in which other defined optional elements are not used, these zones
    **MAY** be used for other department or agency-specific information, as depicted in [Figure 4-8](frontend.md#fig-4-8).
    Departments and agencies **SHOULD** minimize printed text to that which is absolutely necessary.

In the case of the Department of Defense, the back of the card will have a distinct appearance as depicted
in [Figure 4-8](frontend.md#fig-4-8). This is necessary to display information required by the Geneva Accord and to facilitate
legislatively mandated medical entitlements.


[Figure 4-1. Card Front: Printable Areas and Required Data](frontend.md#fig-4-1){:name="fig-4-1"}
{:latex-ignore="true"}

![Diagram of Printable Areas and Required Data on front of card.]({{site.baseurl}}/{{page.collection}}/images/cardfront-required.png 'Card Front: Printable Areas and Required Data'){:style="width: 1047px;" latex-src="cardfront-required.pdf" latex-fig="4-1"}

[Figure 4-2. Card Front: Optional Data Placement (Example 1)](frontend.md#fig-4-2){:name="fig-4-2"}
{:latex-ignore="true"}

![Diagram of Optional Data Placement on front of card (Example 1).]({{site.baseurl}}/{{page.collection}}/images/cardfront-optional1.png 'Card Front: Optional Data Placement (Example 1)'){:style="width: 1047px;" latex-src="cardfront-optional1.pdf" latex-fig="4-2"}

[Figure 4-3. Card Front: Optional Data Placement (Example 2)](frontend.md#fig-4-3){:name="fig-4-3"}
{:latex-ignore="true"}

![Diagram of Optional Data Placement on front of card (Example 2).]({{site.baseurl}}/{{page.collection}}/images/cardfront-optional2.png 'Card Front: Optional Data Placement (Example 2)'){:style="width: 1047px;" latex-src="cardfront-optional2.pdf" latex-fig="4-3"}

[Figure 4-4. Card Front: Optional Data Placement (Example 3)](frontend.md#fig-4-4){:name="fig-4-4"}
{:latex-ignore="true"}

![Diagram of Optional Data Placement on front of card (Example 3).]({{site.baseurl}}/{{page.collection}}/images/cardfront-optional3.png 'Card Front: Optional Data Placement (Example 3)'){:style="width: 1047px;" latex-src="cardfront-optional3.pdf" latex-fig="4-4"}

[Figure 4-5. Card Front: Optional Data Placement (Example 4)](frontend.md#fig-4-5){:name="fig-4-5"}
{:latex-ignore="true"}

![Diagram of Optional Data Placement on front of card (Example 4).]({{site.baseurl}}/{{page.collection}}/images/cardfront-optional4.png 'Card Front: Optional Data Placement (Example 4)'){:style="width: 1047px;" latex-src="cardfront-optional4.pdf" latex-fig="4-5"}

[Figure 4-6. Card Back: Printable Areas and Required Data](frontend.md#fig-4-6){:name="fig-4-6"}
{:latex-ignore="true"}

![Diagram of Printable Areas and Required Data on back of card.]({{site.baseurl}}/{{page.collection}}/images/cardback-required.png 'Card Back: Printable Areas and Required Data'){:style="width: 1047px;" latex-src="cardback-required.pdf" latex-fig="4-6"}

[Figure 4-7. Card Back: Optional Data Placement (Example 1)](frontend.md#fig-4-7){:name="fig-4-7"}
{:latex-ignore="true"}

![Diagram of Optional Data Placement on back of card (Example 1).]({{site.baseurl}}/{{page.collection}}/images/cardback-optional1.png 'Card Back: Optional Data Placement (Example 1)'){:style="width: 1047px;" latex-src="cardback-optional1.pdf" latex-fig="4-7"}

[Figure 4-8. Card Back: Optional Data Placement (Example 2)](frontend.md#fig-4-8){:name="fig-4-8"}
{:latex-ignore="true"}

![Diagram of Optional Data Placement on back of card (Example 2).]({{site.baseurl}}/{{page.collection}}/images/cardback-optional2.png 'Card Back: Optional Data Placement (Example 2)'){:style="width: 1047px;" latex-src="cardback-optional2.pdf" latex-fig="4-8"}

~~~
\clearpage
~~~
{:latex-literal="true"}

### 4.1.5 Color Representation {#s-4-1-5}

[Table 4-2](frontend.md#table-4-2) provides quantitative specifications for colors in four different color systems: sRGB
Tristimulus [[IEC 61966]](references.md#ref-IEC61966), sRGB [[IEC 61966]](references.md#ref-IEC61966), CMYK (Cyan,
Magenta, Yellow, and Key or 'blacK'), and PANTONE&reg;. Note the PANTONE&reg; color cue mapping is approximate and will not
produce an exact match. An agency or department **MAY** use the PANTONE&reg; mappings in cases
where the exact color scales are not available. 
Since the card body is white, the white color-coding is achieved
by the absence of printing. Note that presence of security features, which **MAY** overlap colored or
printed regions, may modify the perceived color. In the case of colored regions, the effect of overlap
**SHALL NOT** prevent the recognition of the principal color by a person with normal vision (corrected or
uncorrected) at a working distance of 50&nbsp;cm to 200&nbsp;cm.

[Table 4-2. Color Representation](frontend.md#table-4-2){:name="table-4-2"}
{:latex-ignore="true"}

|Color|Zone|sRGB Tristimulus|sRGB|CMYK|PANTONE&reg;|
|---|---|---|---|---|
|White|15F|255, 255, 255|255, 255, 255|0, 0, 0, 0||
|Green|15F|153, 255, 153|203, 255, 203|40, 0, 40, 0|359&nbsp;C|
|Blue|15F|0, 255, 255|0, 255, 255|100, 0, 0, 0|630&nbsp;C
|Red|12F|253, 27, 20|254, 92, 79|0, 90, 86, 0|032&nbsp;C|
{:latex-columns="p@0.07\textwidth,p@0.06\textwidth,p@0.22\textwidth,p@0.16\textwidth,p@0.13\textwidth,p@0.15\textwidth" latex-table="4-2" latex-caption="Color Representation"}

## 4.2 PIV Card Logical Characteristics {#s-4-2}

This section defines the PIV Card's logical identity credentials and the requirements for use of these credentials.

To support a variety of authentication mechanisms, the PIV Card **SHALL** contain multiple data elements for
the purpose of verifying the cardholder's identity at graduated assurance levels. The following mandatory
data elements are part of the data model for PIV Card logical credentials that support authentication
mechanisms that are interoperable across agencies:

- a PIN,
- PIV authentication data (one asymmetric private key and corresponding certificate),
- card authentication data (one asymmetric private key and corresponding certificate),
- two fingerprint biometric templates,
- an electronic facial image, and
- a Cardholder Unique Identifier (CHUID).[^support]

[^support]: The CHUID as an authentication mechanism in [Section 6.2.5](../authentication/#s-6-2-5) has been removed from this version of the Standard. The CHUID data element itself, however, has not been removed and continues to be mandatory as it supports other PIV authentication mechanisms.

This Standard also defines two data elements for the PIV Card data model that are mandatory if the cardholder
has a government-issued email account at the time of PIV Card issuance. These data elements are

- an asymmetric private key and corresponding certificate for digital signatures, and
- an asymmetric private key and corresponding certificate for key management.

This Standard also defines optional data elements for the PIV Card data model. These optional data elements
include

- an electronic image of the left iris,
- an electronic image of the right iris,
- one or two fingerprint biometric templates for OCC,
- a symmetric card authentication key for supporting[^supportSYM] physical access applications,
- an asymmetric key to establish secure messaging and authenticate the PIV Card in support of physical access applications, and
- a symmetric PIV Card application administration key associated with the card management system.

[^supportSYM]: The symmetric card authentication key has been deprecated in this version of the Standard. Both the symmetric card authentication key and associated SYM-CAK authentication mechanism may be removed in a future revision of the Standard.

Additional data elements are specified in [[SP 800-73]](references.md#ref-SP-800-73).

PIV Card logical credentials fall into the following three categories:

Cardholder-to-Card (CTC) authentication
: Credential elements used to prove the identity of the cardholder to the card, also known as card activation. 
  Examples include the PIN and the fingerprint biometric templates for OCC.

Card-Management-to-Card (CMTC) authentication
: Credential elements used to prove the identity of the card management system to the card.
  Examples include the PIV Card application administration key.

Cardholder-to-External (CTE) authentication
: Credential elements used by the card to prove the identity of the cardholder to an external entity,
  such as a host computer system. Examples include the biometric data records for BIO and BIO-A,
  symmetric keys, asymmetric keys, and the fingerprint biometric templates for OCC-AUTH.

### 4.2.1 Cardholder Unique Identifier (CHUID) {#s-4-2-1}
{:latex-toc="4.2.1 Cardholder Unique Identifier"}

> Note: The CHUID authentication mechanism ([Section 6.2.5](authentication.md#s-6-2-5)) has been
removed from this version of the Standard. The CHUID data element itself, however, has not been removed and continues to be mandatory as it supports other PIV authentication mechanisms. For example, the BIO, BIO-A, and SYM-CAK authentication mechanisms use the CHUID data
element as a source for the card's expiration date. The CHUID data element also provides the content signing certificate for some authentication mechanisms and unique identifiers for PACS ACLs. 
 
The PIV Card **SHALL** include the CHUID, as defined in [[SP 800-73]](references.md#ref-SP-800-73). The CHUID **SHALL** include two card identifiers: the Federal
Agency Smart Credential Number (FASC-N) and the card UUID in the Global Unique Identification Number (GUID) data element of the CHUID. 
Each identifier uniquely identifies each card as specified in [[SP 800-73]](references.md#ref-SP-800-73).
The value of the card UUID **SHALL**
be the 16&nbsp;byte binary representation of a valid UUID as specified in [[RFC 4122]](references.md#ref-RFC4122). The
CHUID **SHALL** also include an expiration date data element in machine-readable format that specifies when
the card expires. The expiration date format and encoding rules are as specified in [[SP 800-73]](references.md#ref-SP-800-73).

A CHUID **MAY** also include a Cardholder UUID that represents a persistent identifier of the cardholder, as specified
in [[SP 800-73]](references.md#ref-SP-800-73). The value of the cardholder UUID **SHALL**
be the 16&nbsp;byte binary representation of a valid UUID, as specified in [[RFC 4122]](references.md#ref-RFC4122).

The CHUID **SHALL** be accessible from both the contact and contactless interfaces of the PIV Card without
card activation. 

The FASC-N, card UUID, expiration date, and, if present, cardholder UUID **SHALL NOT** be modified post-issuance.

This Standard requires inclusion of the asymmetric signature field in the CHUID container. The
asymmetric signature data element of the CHUID **SHALL** be encoded as a Cryptographic Message Syntax
(CMS) external digital signature, as specified in [[SP 800-73]](references.md#ref-SP-800-73). Algorithm and key size requirements for
the asymmetric signature and digest algorithm are detailed in [[SP 800-78]](references.md#ref-SP-800-78).

The public key required to verify the digital signature **SHALL** be contained in
a content signing certificate, which **SHALL** be
issued under the `id-fpki-common-piv-contentSigning` policy of [[COMMON]](references.md#ref-COMMON). The content
signing certificate **SHALL** also include an extended key usage (`extKeyUsage`) extension asserting `id-PIV-content-signing`. 
The public key **SHALL** be included in the `certificates` field of the CMS external digital signature in a content signing certificate. 
Additional descriptions for the PIV object identifiers are provided in [Appendix B](oid.md#s-b). The
content signing certificate **SHALL NOT** expire before the expiration of the card authentication certificate.

### 4.2.2 Cryptographic Specifications {#s-4-2-2}

The PIV Card **SHALL** implement the cryptographic operations and support functions defined in
[[SP 800-78]](references.md#ref-SP-800-78) and [[SP 800-73]](references.md#ref-SP-800-73).

The PIV Card has both mandatory and optional keys:

PIV authentication key
: A mandatory asymmetric private key that supports card and cardholder
    authentication for an interoperable environment. See [Section 4.2.2.1](frontend.md#s-4-2-2-1).

Asymmetric card authentication key
: A mandatory private key that supports card authentication
    for an interoperable environment. See [Section 4.2.2.2](frontend.md#s-4-2-2-2).

Symmetric card authentication key (deprecated)
: An optional symmetric key that supports physical access.
    See [Section 4.2.2.3](frontend.md#s-4-2-2-3).

Digital signature key
: An asymmetric private key that supports document signing; it is
    mandatory if the cardholder has a government-issued email account at the time of
    PIV Card issuance. See [Section 4.2.2.4](frontend.md#s-4-2-2-4).

Key management key
: An asymmetric private key that supports key establishment;
    it is mandatory if the cardholder has a government-issued email account at the
    time of PIV Card issuance. Optionally, up to 20 retired key management keys[^retired] may also be
    stored on the PIV Card. See [Section 4.2.2.5](frontend.md#s-4-2-2-5).

PIV Card application administration key
: An optional symmetric key used for personalization and post-issuance activities.
    See [Section 4.2.2.6](frontend.md#s-4-2-2-6).

PIV secure messaging key 
: An optional asymmetric private key that supports key establishment for secure messaging and card authentication for physical access.
    See [Section 4.2.2.7](frontend.md#s-4-2-2-7).

The PIV Card **SHALL** store private keys and corresponding public key certificates and **SHALL** perform
cryptographic operations using the asymmetric private keys. At a minimum, the PIV Card **SHALL** store the PIV authentication key,
the asymmetric card authentication key, and the corresponding public key certificates. The PIV Card **SHALL** also store a digital signature key, a
key management key, and the corresponding public key certificates unless the cardholder does not have a
government-issued email account at the time of PIV Card issuance.

With the exception of the card authentication key and keys used to establish secure messaging, cryptographic private key operations **SHALL** be performed only through the contact interface or the virtual contact interface.
Any operation that **MAY** be performed over the contact interface of the PIV Card **MAY** also be performed over the virtual contact interface. 
Requirements for the virtual contact interface are specified in [[SP 800-73]](references.md#ref-SP-800-73). 

All PIV cryptographic keys **SHALL** be generated within a cryptographic module with overall validation at [[FIPS 140]](references.md#ref-FIPS140) 
Level 2 or above. In addition to an overall validation of Level 2, the PIV Card **SHALL**
provide Level 3 physical security to protect the PIV private keys in storage. The scope of the validation
for the PIV Card **SHALL** include all cryptographic operations performed over both the contact and
contactless interfaces

- by the PIV Card application; 
- as part of secure messaging, as specified in this section; and 
- as part of remote post issuance updates, as specified in [Section 2.9.2](requirements.md#s-2-9-2). 

Specific algorithm
testing requirements for the cryptographic operations performed by the PIV Card application are
specified in [[SP 800-78]](references.md#ref-SP-800-78).

Requirements specific to storage and access for each key are detailed in the following sections. Where applicable, key
management requirements are also specified.

[^retired]: Retired key management keys are keys that have expired, have been revoked, or have otherwise been superseded. 

#### 4.2.2.1 PIV Authentication Key {#s-4-2-2-1}
This key **SHALL** be generated on the PIV Card. The PIV Card **SHALL NOT**
permit exportation of the PIV authentication key. The cryptographic operations that use the PIV
authentication key **SHALL** be available through the contact interface and **MAY** additionally be available over the virtual contact interface of the
PIV Card. Operations that use the PIV authentication key **SHALL NOT** be available through the contactless interface of the PIV Card. Private key operations **MAY** be performed using an activated PIV Card without explicit
user action (e.g., the PIN need not be supplied for each operation).

The PIV Card **SHALL** store a corresponding X.509 certificate to support validation of the public key.
The X.509 certificate **SHALL** include the FASC-N in the Subject Alternative Name (SAN) extension using the
`pivFASC-N` attribute to support physical access procedures. The X.509 certificate **SHALL** also include
the card UUID value from the GUID data element of the CHUID in the SAN extension.
The card UUID **SHALL** be encoded as a Uniform Resource Name (URN), as specified in Section 3 of
[[RFC 4122]](references.md#ref-RFC4122). The expiration date of the certificate **SHALL** be no later than the expiration date of the PIV
Card. The PIV authentication certificate **MAY** include a PIV background investigation indicator (previously known as the NACI indicator) extension (see [Appendix B.2](oid.md#s-b-2)). 
This non-critical extension indicates the status
of the cardholder's background investigation at the time of card issuance. [Section 5](keymanagement.md#s-5) of this document
specifies the certificate format and the key management infrastructure for the PIV authentication key.

#### 4.2.2.2 Asymmetric Card Authentication Key {#s-4-2-2-2}
The asymmetric card authentication key **MAY** be generated
on the PIV Card or imported to the card. The PIV Card **SHALL NOT** permit exportation of the card
authentication key. Cryptographic operations that use the card authentication key **SHALL** be available
through the contact and contactless interfaces of the PIV Card and **SHALL NOT** be available through the virtual contact interface of the PIV Card. Private key operations **MAY** be
performed using this key without card activation (e.g., the PIN need not be supplied for operations
with this key).

The PIV Card **SHALL** store a corresponding X.509 certificate to support validation of the public key.
The X.509 certificate **SHALL** include the FASC-N in the SAN extension using the
`pivFASC-N` attribute to support physical access procedures. The X.509 certificate **SHALL** also include
the card UUID value from the GUID data element of the CHUID in the SAN extension.
The card UUID **SHALL** be encoded as a URN, as specified in Section 3 of [[RFC 4122]](references.md#ref-RFC4122). The expiration date of
the certificate **SHALL** be no later than the expiration date of the PIV Card. [Section 5](keymanagement.md#s-5) of this document
specifies the certificate format and the key management infrastructure for asymmetric card
authentication keys.

#### 4.2.2.3 Symmetric Card Authentication Key (Deprecated) {#s-4-2-2-3}
The symmetric card authentication key is deprecated in this version of the Standard.  Both the symmetric card authentication key and the associated SYM-CAK authentication mechanism may be removed in a future revision of the Standard.  

If used, the symmetric card authentication key **MAY** be imported
onto the card by the issuer or be generated on the card. If present, the symmetric card authentication
key **SHALL** be unique for each PIV Card and **SHALL** meet the algorithm and key size requirements stated
in [[SP 800-78]](references.md#ref-SP-800-78). If present, cryptographic operations using this key **MAY** be performed without card
activation (e.g., the PIN need not be supplied for operations with this key). The cryptographic
operations that use the symmetric card authentication key **SHALL** be available through the contact and
contactless interfaces of the PIV Card and **SHALL NOT** be available through the virtual contact interface of the PIV Card. This Standard does not specify key management protocols or
infrastructure requirements.

#### 4.2.2.4 Digital Signature Key {#s-4-2-2-4}
The PIV digital signature key **SHALL** be generated on the PIV Card. The PIV
Card **SHALL NOT** permit exportation of the digital signature key. If this key is present, cryptographic operations
that use the digital signature key **SHALL** be available through the contact interface and **MAY** additionally be available over the virtual contact
interface of the PIV Card. Operations that use the digital signature key **SHALL NOT** be available through the contactless interface of the PIV Card. Private key operations **SHALL NOT** be performed without explicit user action,
as this Standard requires the cardholder to authenticate to the PIV Card each time it performs a
private key computation with the digital signature key.[^cardholderauthentication]

The PIV Card **SHALL** store a corresponding X.509 certificate to support validation of the public key.
The expiration date of the certificate **SHALL** be no later than the expiration date of the PIV Card.
[Section 5](keymanagement.md#s-5) of this document specifies the certificate format and the key management infrastructure for
PIV digital signature keys.

[^cardholderauthentication]: [[NISTIR 7863]](../references/#ref-NISTIR7863) addresses the appropriate use of PIN caching related to digital signatures.

#### 4.2.2.5 Key Management Key {#s-4-2-2-5}
This key **MAY** be generated on the PIV Card or imported to the card. If
present, the cryptographic operations that use the key management key **SHALL** be available through 
the contact interface and **MAY** additionally be available over the virtual contact interface of the PIV Card. Operations that use the key management key **SHALL NOT** be available through the contactless interface of the PIV Card. Private key operations **MAY** be
performed using an activated PIV Card without explicit user action (e.g., the PIN need not be
supplied for each operation).

The PIV Card **SHALL** store a corresponding X.509 certificate to support validation of the public key.
[Section 5](keymanagement.md#s-5) of this document specifies the certificate format and the key management infrastructure for
key management keys.

#### 4.2.2.6 PIV Card Application Administration Key {#s-4-2-2-6}
If present, the PIV Card application administration
key **SHALL** be imported onto the card by the issuer. If present, the cryptographic operations that use
the PIV Card application administration key **SHALL** only be available through the contact interface unless otherwise specified by [[SP 800-73]](references.md#ref-SP-800-73).

#### 4.2.2.7 PIV Secure Messaging Key  {#s-4-2-2-7}

The PIV secure messaging key supports the establishment of secure messaging and authentication using the SM-AUTH authentication mechanism. If present, the key **SHALL** be generated on the PIV Card and **SHALL NOT** be exported. The cryptographic operations that use the PIV secure messaging key **SHALL** be available through the contact and contactless interfaces of the PIV Card. Private key operations[^SMprivate] can be performed without access control restrictions. The PIV Card **SHALL** store a corresponding secure messaging card verifiable certificate (CVC) to support validation of the public
key by the relying system. The use of the PIV secure messaging key and the CVC is further specified in [[SP 800-73]](references.md#ref-SP-800-73) and [[SP 800-78]](references.md#ref-SP-800-78). 

[^SMprivate]:  Private key operation with the PIV secure messaging key is defined as the use of the key to establish session keys for secure messaging or the use of key for SM-AUTH card authentication.

When the key is used to establish secure messaging, it enables data and commands transmitted between the card and an external entity to be both integrity-protected and encrypted. Secure messaging **MAY** be used, for example, to enable the use of on-card biometric comparison. Once secure messaging has been established, a virtual contact interface **MAY** be established.

### 4.2.3 Biometric Data Specifications {#s-4-2-3}

The PIV front-end subsystem employs biometric verification to automate the
recognition of cardholders based on their biological characteristics. The PIV
Card can digitally store fingerprint, face, and iris biometric characteristics.
Techniques for storage, protection, and access of these biometric data records
are outlined in the following sections and explained in depth in
[[SP 800-76]](references.md#ref-SP-800-76) and [[SP 800-73]](references.md#ref-SP-800-73).

#### 4.2.3.1 Biometric Data Representation {#s-4-2-3-1}

The following biometric data **SHALL** be stored on the PIV Card:

- Two fingerprint biometric templates. If no fingerprint images meet the quality criteria of [[SP 800-76]](references.md#ref-SP-800-76),
    the PIV Card **SHALL** nevertheless be populated with fingerprint biometric templates, as specified in
    [[SP 800-76]](references.md#ref-SP-800-76).
- An electronic facial image.

The following biometric data **MAY** also be stored on the PIV Card:

- electronic image of the left iris,
- electronic image of the right iris, and
- fingerprint biometric templates for OCC.[^fingerprints]

All biometric data **SHALL** be stored in the data elements referenced by [[SP 800-73]](references.md#ref-SP-800-73) and in conformance
with the preparation and formatting specifications of [[SP 800-76]](references.md#ref-SP-800-76).

[^fingerprints]: The on-card and off-card fingerprint biometric data records are stored separately and, as conformant instances of different formal fingerprint template standards, are syntactically different. This is described more fully in [[SP 800-76]](../references/#ref-SP-800-76).

#### 4.2.3.2 Biometric Data Record Protection {#s-4-2-3-2}

The integrity of all biometric data records, except for fingerprint biometric templates for OCC, **SHALL** be
protected using digital signatures. The records **SHALL** be prepended with a Common Biometric
Exchange Formats Framework (CBEFF) header and appended with the
CBEFF signature block [[NISTIR 6529-A]](references.md#ref-CBEFF).

The format for a CBEFF header is specified in [[SP 800-76]](references.md#ref-SP-800-76).

The CBEFF signature block contains the digital signature of the biometric data record and
facilitates the verification of the integrity of the biometric data record. The CBEFF signature block **SHALL** be
encoded as a CMS external digital signature as specified in [[SP 800-76]](references.md#ref-SP-800-76). The algorithm and key size
requirements for the digital signature and digest algorithm are detailed in [[SP 800-78]](references.md#ref-SP-800-78).

The public key required to verify the digital signature **SHALL** be in a content signing certificate,
which **SHALL** be issued under the `id-fpki-common-piv-contentSigning` policy of [[COMMON]](references.md#ref-COMMON) and **SHALL** include an extended key usage (`extKeyUsage`) extension asserting `id-PIV-content-signing`. The signature on the biometric data record **SHOULD** be generated with the same signing key as the signature on the CHUID data object. The public key required to verify the digital signature is contained in the CHUID data object's content signing certificate[^notInBioRec] as detailed in [Section 4.2.1](frontend.md#s-4-2-1). 

The use of an different content signing key from that which signs the CHUID is deprecated in this revision of the Standard. If the signature on the biometric data record was generated with a different key than the signature on
the CHUID, the `certificates` field of the CMS external digital signature **SHALL** include the content signing certificate required to verify the signature on the biometric data record. Otherwise, the `certificates` field **SHALL** be omitted.

Additional descriptions for the PIV object identifiers are provided in [Appendix B](oid.md#s-b). The content
signing certificate **SHALL NOT** expire before the expiration of the card authentication certificate.

[^notInBioRec]: The biometric record's CMS external digital signature `certificates` field is omitted.

#### 4.2.3.3 Biometric Data Record Access {#s-4-2-3-3}

The biometric data records, except for fingerprint biometric templates for OCC, that are stored on the card

- **SHALL** be readable through the contact interface only after the presentation of a valid PIN; and
- **MAY** optionally be readable through the virtual contact interface only after the presentation of a valid
    PIN.

OCC **MAY** be performed over the contact and contactless interfaces of the
PIV Card to support card activation ([Section 4.3.1](frontend.md#s-4-3-1)) and cardholder authentication ([Section 6.2.2](authentication.md#s-6-2-2)). The
fingerprint biometric templates for OCC **SHALL NOT** be exportable. If implemented, OCC
**SHALL** be implemented and used in accordance with [[SP 800-73]](references.md#ref-SP-800-73) and [[SP 800-76]](references.md#ref-SP-800-76).

### 4.2.4 PIV Unique Identifiers {#s-4-2-4}

A cardholder is authenticated 
using the mechanisms described in [Section 6](authentication.md#s-6). The authenticated identity **MAY** then be
used as the basis for making authorization decisions. Unique identifiers for both authentication and
authorization are provided in this Standard in order to uniquely identify the cardholder. The two types of
identifiers that serve as identification (of the cardholder) for authentication and authorization purposes
are as follows:

Card identifiers
: Each PIV Card contains a card UUID and a FASC-N that uniquely identify the card and, by
correspondence, the cardholder. These two card identifiers are represented in all of the authentication
data elements for the purpose of binding the PIV data elements to the same PIV Card. For example, the card UUID is represented in the GUID data element of the CHUID, in the `entryUUID` attribute of CMS-signed biometric data records and in the `subjectAltName` extension of PIV authentication certificates. Similarly, the FASC-N is represented in the CHUID, in the `pivFASC-N` attribute of CMS-signed biometric data records, and in the `subjectAltName` extension of PIV authentication certificates.

Cardholder identifiers
: Other identifiers **MAY** be present in credentials on the PIV Card that identify the cardholder rather than
the card. Examples include the cardholder UUID that may appear in the CHUID or the subject names that may appear in the `subjectAltName`
extension in the PIV authentication certificate.

## 4.3 PIV Card Activation {#s-4-3}

The PIV Card **SHALL** be activated[^activation] to perform privileged[^privileged] operations such as using the PIV authentication
key, digital signature key, and key management key. The PIV Card **SHALL** be activated for privileged
operations only after authenticating the cardholder or the appropriate card management system.
Cardholder activation is described in [Section 4.3.1](frontend.md#s-4-3-1) and card management system activation is described in
[Section 4.3.2](frontend.md#s-4-3-2).

[^activation]: Activation in this context refers to the unlocking of the PIV Card application so that privileged operations can be performed.
[^privileged]: A read of a CHUID or use of the card authentication key is not considered a privileged operation.

### 4.3.1 Activation by Cardholder {#s-4-3-1}

PIV Cards **SHALL** implement user-based cardholder activation to allow privileged operations using PIV
credentials held by the card. At a minimum, the PIV Card **SHALL** implement PIN-based cardholder
activation in support of interoperability across departments and agencies. Other card activation
mechanisms as specified in [[SP 800-73]](references.md#ref-SP-800-73) (e.g., OCC card activation) **MAY** be implemented and **SHALL**
be discoverable. For PIN-based cardholder activation, the cardholder **SHALL** supply a numeric PIN. The
PIN **SHALL** be transmitted to the PIV Card and checked by the card. If the PIN
check is successful, the PIV Card is activated. The PIV Card **SHALL** include mechanisms to block
activation of the card after a number of consecutive failed activation attempts. A maximum of 10
consecutive PIN retries **SHALL** be permitted unless a lower limit is imposed by the department or agency.

The cardholder **SHALL** be guided in selecting a strong PIN value. The PIN **SHALL** be a minimum of six digits in length and **SHOULD NOT** be easily guessable, individually identifiable (e.g., part of a Social Security Number or phone number), or commonly used (e.g., 000000, 123456).   

### 4.3.2 Activation by Card Management System {#s-4-3-2}

PIV Cards **MAY** support card activation by the card management system to support card personalization
and post-issuance card update. To activate the card for personalization or update, the card management
system **SHALL** perform a challenge response protocol using cryptographic keys stored on the card in
accordance with [[SP 800-73]](references.md#ref-SP-800-73). When cards are personalized, 
each PIV Card **SHALL** contain a unique PIV Card application administration key
specific to that PIV Card. PIV Card application administration keys **SHALL** meet the algorithm
and key size requirements stated in [[SP 800-78]](references.md#ref-SP-800-78).

## 4.4 Card Reader Requirements {#s-4-4}

This section provides minimum requirements for contact and contactless card readers. This
section also provides requirements for PIN input devices. Further card reader requirements are specified in [[SP 800-96]](references.md#ref-SP-800-96).

### 4.4.1 Contact Reader Requirements {#s-4-4-1}

Contact card readers **SHALL** conform to [[ISO 7816]](references.md#ref-ISO7816) for the card-to-reader interface. These
readers **SHALL** conform to the Personal Computer/Smart Card (PC/SC) Specification [[PCSC]](references.md#ref-PCSC) for the reader-to-host system interface in general-purpose desktop computing systems and
**SHALL** conform to the requirements specified in [[SP 800-96]](references.md#ref-SP-800-96). In systems where the readers are not
connected to general-purpose desktop computing systems, the reader-to-host system interface is not
specified in this Standard.

### 4.4.2 Contactless Reader Requirements {#s-4-4-2}

Contactless card readers **SHALL** conform to [[ISO 14443]](references.md#ref-ISO14443) for the card-to-reader interface, and data
transmitted over the [[ISO 14443]](references.md#ref-ISO14443) link **SHALL** conform to [[ISO 7816]](references.md#ref-ISO7816). In cases where these readers are
connected to general-purpose desktop computing systems, they **SHALL** conform to [[PCSC]](references.md#ref-PCSC) for the reader-to-host system interface and **SHALL** conform to the requirements
specified in [[SP 800-96]](references.md#ref-SP-800-96). In systems where the readers are not connected to general-purpose desktop
computing systems, the reader-to-host system interface is not specified in this Standard.


### 4.4.3 Reader Interoperability (Removed) {#s-4-4-3}
{:latex-toc="4.4.3 Reader Interoperability"}

> Note: This section was formerly entitled "Reader Resilience and Flexibility."

The content of this section has been removed since the PIV middleware specified in [[SP 800-73]](references.md#ref-SP-800-73) adequately covers reader interoperability, resilience, and flexibility for different PIV systems.

### 4.4.4 Card Activation Device Requirements {#s-4-4-4}

When the PIV Card is used with a PIN or OCC data for physical access, the input device **SHALL** be
integral to (i.e., built into) the PIV Card reader. When the PIV Card is used with a PIN or OCC data for logical
access (e.g., to authenticate to a website or other server), the input device is not required to be integrated
with the PIV Card reader. If the input device is not integrated with the PIV Card reader, the PIN or
OCC data **SHALL** be transmitted securely and directly to the PIV Card for card activation.

The specifications for fingerprint biometric capture devices for OCC are given in [[SP 800-76]](references.md#ref-SP-800-76).

Malicious code could be introduced into PIN capture and biometric capture devices for the purpose of
compromising or otherwise exploiting the PIV Card. General good practice to mitigate malicious code
threats is outside of the scope of this document (see [[SP 800-53]](references.md#ref-SP-800-53) for a catalog of security and privacy controls for federal information systems).
