---
layout: default
title: PIV Front-End Subsystem
navOrder: 4
navTitle: Front-End
permalink: /frontend/
---

# 4. PIV Front-End Subsystem {#s-4}

This section identifies the requirements for the components of the PIV front-end subsystem. [Section 4.1](frontend.md#s-4-1)
provides the physical card specifications. [Section 4.2](frontend.md#s-4-2) provides the logical card specifications. 
[Section 4.3](frontend.md#s-4-3) specifies the requirements for card activation. [Section 4.4](frontend.md#s-4-4) provides requirements for PIV Card
readers.

## 4.1 PIV Card Physical Characteristics {#s-4-1}

References to the PIV Card in this section pertain to the physical characteristics only. References to the
front of the card apply to the side of the card that contains the electronic contacts; references to the back
of the card apply to the opposite side from the front side.

The PIV Card's physical appearance and other characteristics should balance the need to have the PIV
Card commonly recognized as a Federal identification card while providing the flexibility to support
individual department and agency requirements. Having a common look for PIV Cards is important in
meeting the objectives of improved security and interoperability. In support of these objectives,
consistent placement of printed components and technology is generally necessary.

The PIV Card SHALL comply with physical characteristics as described in International Organization for
Standardization (ISO)/International Electrotechnical Commission (IEC) 7810 [[ISO7810]](../_Appendix/references.md#ref-ISO7810), ISO/IEC 10373
[[ISO10373]](../_Appendix/references.md#ref-ISO10373), ISO/IEC 7816 for contact cards [[ISO7816]](../_Appendix/references.md#ref-ISO7816), and ISO/IEC 14443 for contactless cards
[[ISO14443]](../_Appendix/references.md#ref-ISO14443).

### 4.1.1 Printed Material {#s-4-1-1}

The printed material SHALL NOT rub off during the life of the PIV Card, nor SHALL the printing process
deposit debris on the printer rollers during printing and laminating. Printed material SHALL NOT interfere
with the contact and contactless ICC(s) and related components, nor SHALL it obstruct access to machine-readable information.

### 4.1.2 Tamper Proofing and Resistance {#s-4-1-2}

The PIV Card SHALL contain security features that aid in reducing counterfeiting, are resistant to tampering,
and provide visual evidence of tampering attempts. At a minimum, a PIV Card SHALL incorporate one such
security feature. Examples of these security features include the following:

- optical varying structures;
- optical varying inks;
- laser etching and engraving;
- holograms;
- holographic images; and
- watermarks.

Incorporation of security features SHALL—

- be in accordance with durability requirements;
- be free of defects, such as fading and discoloration;
- not obscure printed information; and
- not impede access to machine-readable information.

Departments and agencies MAY incorporate additional tamper-resistance and anti-counterfeiting methods.
As a generally accepted security procedure, Federal departments and agencies are strongly encouraged to
periodically review the viability, effectiveness, and currency of employed tamper resistance and anti-counterfeiting methods.

### 4.1.3 Physical Characteristics and Durability {#s-4-1-3}

The following list describes the physical requirements for the PIV Card.

- The PIV Card SHALL contain a contact and a contactless ICC interface.
- The card body SHALL be white in accordance with color representation in [Section 4.1.5](frontend.md#s-4-1-5). Only a
    security feature, as described in [Section 4.1.2](frontend.md#s-4-1-2), may modify the perceived color slightly. Presence of a
    security feature SHALL NOT prevent the recognition of white as the principal card body color by a person
    with normal vision (corrected or uncorrected) at a working distance of 50 cm to 200 cm.
- The card body structure SHALL consist of card material(s) that satisfy the card characteristics in
    [[ISO7810]](../_Appendix/references.md#ref-ISO7810) and test methods in American National Standards Institute (ANSI) 322 [[ANSI322]](../_Appendix/references.md#ref-ANSI322).
    Although the [[ANSI322]](../_Appendix/references.md#ref-ANSI322) test methods do not currently specify compliance requirements, the tests
    SHALL be used to evaluate card material durability and performance. The [[ANSI322]](../_Appendix/references.md#ref-ANSI322) tests minimally
    SHALL include card flexure, static stress, plasticizer exposure, impact resistance, card structural
    integrity, surface abrasion, temperature and humidity-induced dye migration, ultraviolet light
    exposure, and a laundry test. Cards SHALL NOT malfunction or delaminate after hand cleaning with a
    mild soap and water mixture.
- The card SHALL be subjected to actual, concentrated, or artificial sunlight to appropriately reflect 2000
    hours of southwestern United States' sunlight exposure in accordance with [[ISO10373]](../_Appendix/references.md#ref-ISO10373), Section 5.12.
    Concentrated sunlight exposure SHALL be performed in accordance with [[G90-98]](../_Appendix/references.md#ref-G90-98) and accelerated
    exposure in accordance with [[G155-00]](../_Appendix/references.md#ref-G155-00). After exposure, the card SHALL be subjected to the
    [[ISO10373]](../_Appendix/references.md#ref-ISO10373) dynamic bending test and SHALL have no visible cracks or failures. Alternatively, the card
    may be subjected to the [[ANSI322]](../_Appendix/references.md#ref-ANSI322) tests for ultraviolet and daylight fading resistance and subjected
    to the same [[ISO10373]](../_Appendix/references.md#ref-ISO10373) dynamic bending test.
- There are methods by which proper card orientation can be indicated. [Section 4.1.4.3](frontend.md#s-4-1-4-3), for example,
    defines Zones 21F and 22F, where card orientation features MAY be applied.[^orientation] Note: If an agency
    determines that tactilely discernible markers for PIV Cards imposes an undue burden, the agency
    must implement policies and procedures to accommodate employees and contractors with disabilities
    in accordance with Sections 501 and 504 of the Rehabilitation Act.
- The card SHALL be 27- to 33-mil thick (before lamination) in accordance with [[ISO7810]](../_Appendix/references.md#ref-ISO7810).
- The PIV Card SHALL NOT be embossed.
- Decals SHALL NOT be adhered to the card.
- Departments and agencies MAY choose to punch an opening in the card body to enable the card to be
    oriented by touch or to be worn on a lanyard. Departments and agencies should ensure such
    alterations are closely coordinated with the card vendor and/or manufacturer to ensure the card
    material integrity and printing process is not adversely impacted. Departments and agencies are
    strongly encouraged to ensure such alterations do not
    compromise card body durability requirements and characteristics;
    invalidate card manufacturer warranties or other product claims;
    alter or interfere with printed information, including the photo; or
    damage or interfere with machine-readable technology, such as the embedded antenna.

- The card material SHALL withstand the effects of temperatures required by the application of a polyester
    laminate on one or both sides of the card by commercial off-the-shelf (COTS) equipment. The
    thickness added due to a laminate layer SHALL NOT interfere with the smart card reader operation. The
    card material SHALL allow production of a flat card in accordance with [[ISO7810]](../_Appendix/references.md#ref-ISO7810) after lamination of
    one or both sides of the card.

The PIV Card MAY be subjected to additional testing.

[^orientation]: For some individuals, the contact surface for the ICC MAY be sufficient for determining the orientation of the card.

### 4.1.4 Visual Card Topography {#s-4-1-4}

The information on a PIV Card SHALL be in visual printed and electronic form. This section covers the
placement of visual and printed information. It does not cover information stored in electronic form, such
as stored data elements, and other possible machine-readable technologies. Logically stored data
elements are discussed in [Section 4.2](frontend.md#s-4-2).

As noted in [Section 4.1.3](frontend.md#s-4-1-3), the PIV Card SHALL contain a contact and a contactless ICC interface. This
Standard does not specify whether a single chip is used or multiple chips are used to support the mandated
contact and contactless interfaces.

To achieve a common PIV Card appearance, yet provide departments and agencies the flexibility to
augment the card with department or agency-specific requirements, the card SHALL contain mandated and
optional printed information and mandated and optional machine-readable technologies. Mandated and
optional items SHALL generally be placed as described and depicted. Printed data SHALL NOT interfere with
machine-readable technology.

Areas that are marked as reserved SHOULD NOT be used for printing. The reason for the recommended
reserved areas is that placement of the embedded contactless ICC module may vary from manufacturer to
manufacturer, and there are constraints that prohibit printing over the embedded contactless module. The
PIV Card topography provides flexibility for placement of the embedded module, either in the upper
right-hand corner or in the lower bottom portion. Printing restrictions apply only to the area where the
embedded module is located (i.e., upper right-hand corner, lower bottom portion).

Because technological developments may obviate the need to have a restricted area, or change the size of
the restricted area, departments and agencies are encouraged to work closely with card vendors and
manufacturers to ensure current printing procedures and methods are applied as well as potential
integration of features that may improve tamper resistance and anti-counterfeiting of the PIV Card.


#### 4.1.4.1 Mandatory Items on the Front of the PIV Card {#s-4-1-4-1}

*Zone 1F—Photograph*. The photograph SHALL be placed in the upper left corner, as depicted in [Figure 4-1](#fig-4-1),
and be a full frontal pose from top of the head to shoulder. A minimum of 300 dots per inch (dpi)
resolution SHALL be used. The background SHOULD follow recommendations set forth in [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76).

*Zone 2F—Name*. The full name[^pseudonym] SHALL be printed directly under the photograph in capital letters. The
full name SHALL be composed of a Primary Identifier (i.e., surnames or family names) and a Secondary
Identifier (i.e., pre-names or given names). The printed name SHALL match the name on the identity source
documents provided during identity proofing and registration to the extent possible. The full name SHALL
be printed in the &lt;Primary Identifier&gt;, &lt;Secondary Identifier&gt; format. The entire full name SHOULD be
printed on available lines of Zone 2F and either identifier could be wrapped. The wrapped identifier SHALL
be indicated with "&gt;" character at the end of the line. The identifiers MAY be printed on separate lines if
each fits on one line. Departments and agencies SHALL use the largest font size of 7 to 10 points that allows
the full name to be printed. The font size 7 point allows space for 3 lines and SHALL only be used if the full
name does not fit on two lines with font size 8 point. [Table 4-1](#table-4-1) provides examples of separate Primary
and Secondary Identifier lines, single line with identifiers, wrapped full names, and full name in three
lines. Note that the truncation SHOULD only occur if the full name cannot be printed in 7 point font.

Names in the Primary Identifier and the first name in the Secondary Identifier SHALL NOT be abbreviated.
Other names and conventional prefixes and suffixes, which SHALL be included in the Secondary Identifier,
MAY be abbreviated. The special character "." (period) SHALL indicate such abbreviations, as shown in
[Figure 4-2](#fig-4-2). Other uses of special symbols (e.g., "O'BRIEN") are at the discretion of the issuer.

[Table 4-1. Name Examples](#table-4-1){:name="table-4-1"}

|Name|Characteristics|Example|
|---|---|---|
|John Doe|simple full name of individual who does not have a middle name, two lines sufficient with 10 points.|![]({{site.baseurl}}/{{page.collection}}/images/name1.png){:style="width: 400px;"}|
|Anna Maria Eriksson|simple full name, two lines sufficient with 10 points.|![]({{site.baseurl}}/{{page.collection}}/images/name2.png){:style="width: 400px;"}|
|Anna Maria Eriksson|simple full name with abbreviated middle name, two lines sufficient with 10 points.|![]({{site.baseurl}}/{{page.collection}}/images/name3.png){:style="width: 400px;"}|
|Anna Maria Eriksson|simple full name, one line sufficient for full name with 10 points.|![]({{site.baseurl}}/{{page.collection}}/images/name4.png){:style="width: 400px;"}|
|Susie Margaret Smith-Jones|longer full name in two lines, sufficient space in 10 points.|![]({{site.baseurl}}/{{page.collection}}/images/name5.png){:style="width: 400px;"}|
|Susie Margaret Smith-Jones|longer full name wrapped, two lines sufficient with 10 points.|![]({{site.baseurl}}/{{page.collection}}/images/name6.png){:style="width: 400px;"}|
|Chayapa Dejthamrong Krusuang Nilavadhanananda|longer full name wrapped, two lines NOT sufficient with 10 points. Reduce the font size to 8 points.|![]({{site.baseurl}}/{{page.collection}}/images/name7.png){:style="width: 400px;"}|
|Vaasa Silvaan Beenelong Wooloomooloo Warrandyte Warwarnambool|longer full name, two lines NOT sufficient with 8 point, 7 point allows sufficient space for three lines in Zone 2F.|![]({{site.baseurl}}/{{page.collection}}/images/name8.png){:style="width: 400px;"}|
|Vaasa Silvaan Beenelong Wooloomooloo Warrandyte Warwarnambool|same as previous but full name is wrapped.|![]({{site.baseurl}}/{{page.collection}}/images/name9.png){:style="width: 400px;"}|
|Dingo Pontooroomooloo Vaasa Silvaan Beenelong Wooloomooloo Warrandyte Warwarnambool|truncated full name, three lines with 7 point NOT sufficient.|![]({{site.baseurl}}/{{page.collection}}/images/name10.png){:style="width: 400px;"}|


*Zone 8F—Employee Affiliation*. An employee affiliation SHALL be printed on the card as depicted in 
[Figure 4-1](#fig-4-1). Some examples of employee affiliation are "Employee," "Contractor," "Active Duty," and
"Civilian."

*Zone 10F—Agency, Department, or Organization*. The organizational affiliation SHALL be printed as
depicted in [Figure 4-1](#fig-4-1).

*Zone 14F—Card Expiration Date*. The card expiration date SHALL be printed on the card as depicted in
[Figure 4-1](#fig-4-1). The card expiration date SHALL be in a YYYYMMMDD format whereby the MMM characters
represent the three-letter month abbreviation as follows: JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG,
SEP, OCT, NOV, and DEC. The Zone 14F expiration date SHALL be printed in Arial 6 to 9 point bold.

*Zone 15F—Color-Coding for Employee Affiliation*. Color-coding SHALL be used for additional
identification of employee affiliation as a background color for Zone 2F (name) as depicted in Figures [4-1](#fig-4-1)
and [4-4](#fig-4-4). The following color scheme SHALL be used:

- Blue—Foreign National
- White—Government Employee
- Green—Contractor.

Foreign National color-coding has precedence over Government Employee and Contractor color-coding.
These colors SHALL be reserved and SHALL NOT be employed for other purposes. Also, these colors SHALL be
printed in accordance to the color specifications provided in [Section 4.1.5](frontend.md#s-4-1-5). Zone 15F MAY be a solid or
patterned line at the department or agency's discretion.

*Zone 18F—Affiliation Color Code*. The affiliation color code "B" for Blue, "W" for White, or "G" for
Green SHALL be printed in a white circle in Zone 15F as depicted in [Figure 4-1](#fig-4-1). The diameter of the circle
SHALL NOT be more than 5 mm. Note that the lettering SHALL correspond to the printed color in Zone 15F.

*Zone 19F—Card Expiration Date*. The card expiration date SHALL be printed in a MMMYYYY format in
the upper right-hand corner as depicted in [Figure 4-1](#fig-4-1). The Zone 19F expiration date SHALL be printed in
Arial 12pt Bold.

[^pseudonym]: Alternatively, an authorized pseudonym as provided under the law as discussed in [Section 2.8.1](../requirements/#s-2-8-1){:.footnote-ref}.

#### 4.1.4.2 Mandatory Items on the Back of the PIV Card {#s-4-1-4-2}

*Zone 1B—Agency Card Serial Number*. This item SHALL be printed as depicted in [Figure 4-6](#fig-4-6) and contain
the unique serial number from the issuing department or agency. The format SHALL be at the discretion of
the issuing department or agency.

*Zone 2B—Issuer Identification Number*. This item SHALL be printed as depicted in [Figure 4-6](#fig-4-6) and consist
of six characters for the department code, four characters for the agency code, and a five-digit number
that uniquely identifies the issuing facility within the department or agency.

#### 4.1.4.3 Optional Items on the Front of the PIV Card {#s-4-1-4-3}

This section contains a description of the optional information and machine-readable technologies that
may be used and their respective placement. The storage capacity of all optional technologies is as
prescribed by individual departments and agencies and is not addressed in this Standard. Although the
items discussed in this section are optional, if used they SHALL be placed on the card as designated in the
examples provided and as noted.

*Zone 3F—Signature*. If used, the department or agency SHALL place the cardholder signature below the
photograph and cardholder name as depicted in [Figure 4-3](#fig-4-3). The space for the signature SHALL NOT interfere
with the contact and contactless placement. Because of card surface space constraints, placement of a
signature may limit the size of the optional two-dimensional bar code.

*Zone 4F—Agency Specific Text Area*. If used, this area can be used for printing agency specific
requirements, such as employee status, as shown in [Figure 4-2](#fig-4-2).

*Zone 5F—Rank*. If used, the cardholder's rank SHALL be printed in the area as illustrated in [Figure 4-2](#fig-4-2).
Data format is at the department or agency's discretion.

*Zone 6F—Portable Data File (PDF) Two-Dimensional Bar Code*. If used, the PDF bar code placement
SHALL be as depicted in [Figure 4-2](#fig-4-2) (i.e., left side of the card). If Zone 3F (a cardholder signature) is used,
the size of the PDF bar code may be affected. The card issuer should confirm that a PDF used in
conjunction with a PIV Card containing a cardholder signature will satisfy the anticipated PDF data
storage requirements.

*Zone 9F— Header*. If used, the text "United States Government" SHALL be placed as depicted in 
[Figure 4-4](#fig-4-4). Departments and agencies may also choose to use this zone for other department or agency-specific
information, such as identifying a Federal emergency responder role, as depicted in [Figure 4-2](#fig-4-2).

*Zone 11F—Agency Seal*. If used, the seal selected by the issuing department, agency, or organization
SHALL be printed in the area depicted. It SHALL be printed using the guidelines provided in [Figure 4-2](#fig-4-2) to
ensure information printed on the seal is legible and clearly visible.

*Zone 12F—Footer*. The footer is the location for the Federal Emergency Response Official identification
label. If used, a department or agency MAY print "Federal Emergency Response Official" as depicted in
[Figure 4-2](#fig-4-2), preferably in white lettering on a red background. Departments and agencies MAY also use
Zone 9F to further identify the Federal emergency respondent's official role. Some examples of official
roles are "Law Enforcement," "Fire Fighter," and "Emergency Response Team (ERT)."

When Zone 15F indicates Foreign National affiliation and the department or agency does not need to
highlight emergency response official status, Zone 12F MAY be used to denote the country or countries of
citizenship. If so used, the department or agency SHALL print the country name or the three-letter country
abbreviation (alpha-3 format) in accordance with ISO 3166-1, Country Codes [[ISO3166]](../_Appendix/references.md#ref-ISO3166). [Figure 4-4](#fig-4-4)
illustrates an example of Foreign National color-coding using country abbreviations.

*Zone 13F—Issue Date*. If used, the card issuance date SHALL be printed above the Zone 14F expiration
date in YYYYMMMDD format as depicted in [Figure 4-3](#fig-4-3).

*Zone 16F—Photo Border*. A border MAY be used with the photo to further identify employee affiliation,
as depicted in [Figure 4-3](#fig-4-3). This border MAY be used in conjunction with Zone 15F to enable departments
and agencies to develop various employee categories. The photo border SHALL NOT obscure the photo. The
border MAY be a solid or patterned line. For solid and patterned lines, red SHALL be reserved for emergency
response officials, blue for foreign nationals, and green for contractors. All other colors MAY be used at
the department or agency's discretion.

*Zone 17F—Agency Specific Data*. In cases in which other defined optional elements are not used, Zone
17F MAY be used for other department or agency-specific information, as depicted in [Figure 4-5](#fig-4-5).

*Zone 20F—Organizational Affiliation Abbreviation*. The organizational affiliation abbreviation MAY be
printed in the upper right-hand corner below the Zone 19F expiration date as shown in [Figure 4-2](#fig-4-2). If
printed, the organizational affiliation abbreviation SHALL be printed in Arial 12pt Bold.

*Zone 21F –Edge Ridging or Notched Corner Tactile Marker*. If used, this area SHALL incorporate edge
ridging or a notched corner to indicate card orientation as depicted in [Figure 4-4](#fig-4-4). Departments and
agencies should ensure such alterations are closely coordinated with the card vendor and/or manufacturer
to ensure the card material integrity and printing process is not adversely impacted.

*Zone 22F –Laser Engraving Tactile Marker*. If used, tactilely discernible marks SHALL be created using
laser engraving to indicate card orientation as depicted in [Figure 4-4](#fig-4-4). There SHALL be an opening in the
lamination foil where laser engraving is performed. Departments and agencies should ensure such
alterations are closely coordinated with the card vendor and/or manufacturer to ensure the card material
integrity and printing process is not adversely impacted.


#### 4.1.4.4 Optional Items on the Back of the PIV Card {#s-4-1-4-4}

*Zone 3B—Magnetic Stripe*. If used, the magnetic stripe SHALL be high coercivity and placed in accordance
with [[ISO7811]](../_Appendix/references.md#ref-ISO7811), as illustrated in [Figure 4-7](#fig-4-7).

*Zone 4B—Return Address*. If used, the "return if lost" language SHALL be generally placed on the back of
the card as depicted in [Figure 4-7](#fig-4-7).

*Zone 5B—Physical Characteristics of Cardholder*. If used, the cardholder physical characteristics (e.g.,
height, eye color, hair color) SHALL be printed in the general area illustrated in [Figure 4-7](#fig-4-7).

*Zone 6B—Additional Language for Emergency Response Officials*. Departments and agencies MAY
choose to provide additional information to identify emergency response officials or to better identify the
cardholder's authorized access. If used, this additional text SHALL be in the general area depicted and SHALL NOT interfere with other printed text or machine-readable components. An example of a printed statement
is provided in [Figure 4-7](#fig-4-7).

*Zone 7B—Standard Section 499, Title 18 Language*. If used, standard Section 499, Title 18, language
warning against counterfeiting, altering, or misusing the card SHALL be printed in the general area depicted
in [Figure 4-7](#fig-4-7).

*Zone 8B—Linear 3 of 9 Bar Code*. If used, a linear 3 of 9 bar code SHALL be generally placed as depicted
in [Figure 4-7](#fig-4-7). It SHALL be in accordance with Association for Automatic Identification and Mobility (AIM)
standards. Beginning and end points of the bar code will be dependent on the embedded contactless
module selected. Departments and agencies are encouraged to coordinate placement of the bar code with
the card vendor.

*Zone 9B—Agency-Specific Text*. In cases in which other defined optional elements are not used, Zone 9B
MAY be used for other department or agency-specific information, as depicted in [Figure 4-8](#fig-4-8). For example,
emergency response officials MAY use this area to provide additional details.

*Zone 10B—Agency-Specific Text*. Zone 10B is similar to Zone 9B in that it is another area for providing
department or agency-specific information.

For Zones 9B and 10B, departments and agencies are encouraged to use this area prudently and minimize
printed text to that which is absolutely necessary.

In the case of the Department of Defense, the back of the card will have a distinct appearance as depicted
in [Figure 4-8](#fig-4-8). This is necessary to display information required by the Geneva Accord and to facilitate
legislatively mandated medical entitlements.


[Figure 4-1. Card Front—Printable Areas and Required Data](#fig-4-1){:name="fig-4-1"}

![Figure 4-1]({{site.baseurl}}/{{page.collection}}/images/cardfront-required.jpg){:style="width: 1047px;"}

[Figure 4-2. Card Front—Optional Data Placement—Example 1](#fig-4-2){:name="fig-4-2"}

![Figure 4-2]({{site.baseurl}}/{{page.collection}}/images/cardfront-optional1.jpg){:style="width: 1047px;"}

[Figure 4-3. Card Front—Optional Data Placement—Example 2](#fig-4-3){:name="fig-4-3"}

![Figure 4-3]({{site.baseurl}}/{{page.collection}}/images/cardfront-optional2.jpg){:style="width: 1047px;"}

[Figure 4-4. Card Front—Optional Data Placement—Example 3](#fig-4-4){:name="fig-4-4"}

![Figure 4-4]({{site.baseurl}}/{{page.collection}}/images/cardfront-optional3.jpg){:style="width: 1047px;"}

[Figure 4-5. Card Front—Optional Data Placement—Example 4](#fig-4-5){:name="fig-4-5"}

![Figure 4-5]({{site.baseurl}}/{{page.collection}}/images/cardfront-optional4.jpg){:style="width: 1047px;"}

[Figure 4-6. Card Back—Printable Areas and Required Data](#fig-4-6){:name="fig-4-6"}

![Figure 4-6]({{site.baseurl}}/{{page.collection}}/images/cardback-required.jpg){:style="width: 1047px;"}

[Figure 4-7. Card Back—Optional Data Placement—Example 1](#fig-4-7){:name="fig-4-7"}

![Figure 4-7]({{site.baseurl}}/{{page.collection}}/images/cardback-optional1.jpg){:style="width: 1047px;"}

[Figure 4-8. Card Back—Optional Data Placement—Example 2](#fig-4-8){:name="fig-4-8"}

![Figure 4-8]({{site.baseurl}}/{{page.collection}}/images/cardback-optional2.jpg){:style="width: 1047px;"}

### 4.1.5 Color Representation {#s-4-1-5}

[Table 4-2](#table-4-2) provides quantitative specifications for colors in three different color systems: sRGB
Tristimulus, sRGB ([[IEC61966]](../_Appendix/references.md#ref-IEC61966), Color management – default RGB color space), and CMYK (Cyan,
Magenta, Yellow and Key or 'blacK'). Since the card body is white, the white color-coding is achieved
by the absence of printing. Note that presence of the security feature, which MAY overlap colored or
printed regions, may modify the perceived color. In the case of colored regions, the effect of overlap
SHALL NOT prevent the recognition of the principal color by a person with normal vision (corrected or
uncorrected) at a working distance of 50 cm to 200 cm.

[Table 4-2. Color Representation](#table-4-2){:name="table-4-2"}

|Color|Zone|sRGB Tristimulus Value (IEC 61966- 2 - 1)|sRGB Value (IEC 61966- 2 - 1)|CMYK Value {C,M,Y,K}|
|---|---|---|---|---|
|White|15F|{255, 255, 255}|{255, 255, 255}|{0, 0, 0, 0}|
|Green|15F|{153, 255, 153}|{203, 255, 203}|{40, 0, 40, 0}|
|Blue|15F|{0, 255, 255}|{0, 255, 255}|{100, 0, 0, 0}|
|Red|12F|{253, 27, 20}|{254, 92, 79}|{0, 90, 86, 0}|

The colors in [Table 4-2](#table-4-2) can be mapped to the Pantone[^pantone] color cue; however, note that this will not
produce an exact match. An agency or department MAY use the following Pantone mappings in cases
where [Table 4-2](#table-4-2) scales are not available.

- Blue—630C
- White—White
- Green—359C
- Red—032C

[^pantone]: Pantone is a registered name protected by law.

## 4.2 PIV Card Logical Characteristics {#s-4-2}

This section defines logical identity credentials and the requirements for use of these credentials.

To support a variety of authentication mechanisms, the PIV Card SHALL contain multiple data elements for
the purpose of verifying the cardholder's identity at graduated assurance levels. The following mandatory
data elements are part of the data model for PIV logical credentials that support authentication
mechanisms interoperable across agencies:

- a PIN;
- a CHUID;
- PIV authentication data (one asymmetric private key and corresponding certificate);
- two fingerprint templates;
- an electronic facial image; and
- card authentication data (one asymmetric private key and corresponding certificate).

This Standard also defines two data elements for the PIV data model that are mandatory if the cardholder
has a government-issued email account at the time of credential issuance. These data elements are:

- an asymmetric private key and corresponding certificate for digital signatures; and
- an asymmetric private key and corresponding certificate for key management.

This Standard also defines optional data elements for the PIV data model. These optional data elements
include:

- one or two iris images;
- one or two fingerprint templates for on-card comparison;
- a symmetric Card Authentication key for supporting physical access applications; and
- a symmetric PIV Card Application Administration key associated with the card management system.

In addition to the above, other data elements are specified in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73).

PIV logical credentials fall into the following three categories:

1. credential elements used to prove the identity of the cardholder to the card (CTC authentication);
2. credential elements used to prove the identity of the card management system to the card (CMTC
    authentication); and
3. credential elements used by the card to prove the identity of the cardholder to an external entity
    (CTE authentication) such as a host computer system.

The PIN falls into the first category, the PIV Card Application Administration Key into the second
category, and the biometric credentials, symmetric keys, and asymmetric keys into the third.
The fingerprint templates for on-card comparison fall into the first and third categories.

### 4.2.1 Cardholder Unique Identifier (CHUID) {#s-4-2-1}

The PIV Card SHALL include the CHUID as defined in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73). The CHUID includes the Federal
Agency Smart Credential Number (FASC-N) and the Global Unique Identification Number (GUID),
which uniquely identify each card as described in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73). The value of the GUID data element SHALL
be a 16-byte binary representation of a valid Universally Unique IDentifier (UUID) [[RFC4122]](../_Appendix/references.md#ref-RFC4122). The
CHUID SHALL also include an expiration date data element in machine-readable format that specifies when
the card expires. The expiration date format and encoding rules are as specified in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73).

The CHUID SHALL be accessible from both the contact and contactless interfaces of the PIV Card without
card activation. The FASC-N, UUID, and expiration date SHALL NOT be modified post-issuance.

This Standard requires inclusion of the asymmetric signature field in the CHUID container. The
asymmetric signature data element of the CHUID SHALL be encoded as a Cryptographic Message Syntax
(CMS) external digital signature, as specified in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73). Algorithm and key size requirements for
the asymmetric signature and digest algorithm are detailed in [[SP 800-78]](../_Appendix/references.md#ref-SP-800-78).

For signatures created before October 15, 2015, the public key required to verify the digital signature
SHALL be provided in the *certificates* field of the CMS external digital signature in a content signing
certificate, which SHALL be an X.509 digital signature certificate issued under the id-fpki-common-piv-contentSigning, id-fpki-common-devices, id-fpki-common-devicesHardware, id-fpki-common-hardware,
or id-fpki-common-High policy of [[COMMON]](../_Appendix/references.md#ref-COMMON).[^legacypki] For signatures created on or after October 15, 2015,
the public key required to verify the digital signature SHALL be provided in the *certificates* field of the CMS
external digital signature in a content signing certificate, which SHALL be an X.509 digital signature
certificate issued under the id-fpki-common-piv-contentSigning policy of [[COMMON]](../_Appendix/references.md#ref-COMMON). The content
signing certificate SHALL also include an extended key usage (*extKeyUsage*) extension asserting id-PIV-content-signing. Additional descriptions for the PIV object identifiers are provided in Appendix B. The
content signing certificate on a valid PIV Card (one that is neither expired nor revoked) SHALL NOT be
expired.

[^legacypki]: For legacy PKIs, as defined in [Section 5.4](../keymanagement/#s-5-4){:.footnote-ref}, the certificates MAY be issued under a department or agency-specific policy that has been cross-certified with the Federal Bridge CA (FBCA) at the Medium Hardware or High Assurance Level.

### 4.2.2 Cryptographic Specifications {#s-4-2-2}

The PIV Card SHALL implement the cryptographic operations and support functions as defined in
[[SP 800-78]](../_Appendix/references.md#ref-SP-800-78) and [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73) 

The PIV Card must store private keys and corresponding public key certificates, and perform
cryptographic operations using the asymmetric private keys. At a minimum, the PIV Card must store two
asymmetric private keys and the corresponding public key certificates, namely the *PIV Authentication key*
and the *asymmetric Card Authentication key*. The PIV Card must also store a *digital signature key* and a
*key management key*, and the corresponding public key certificates, unless the cardholder does not have a
government-issued email account at the time of credential issuance.

The PIV Card MAY include an asymmetric private key and corresponding public key certificate to
establish symmetric keys for use with secure messaging, as specified in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73) and [[SP 800-78]](../_Appendix/references.md#ref-SP-800-78).
Secure messaging enables data and commands transmitted between the card and an external entity to be
both integrity protected and encrypted. Secure messaging MAY be used, for example, to enable the use of
on-card biometric comparison as an authentication mechanism.

Once secure messaging has been established, a *virtual contact interface* MAY be established.
Requirements for the virtual contact interface are specified in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73). Any operation that MAY be
performed over the contact interface of the PIV Card MAY also be performed over the virtual contact
interface. With the exception of the *Card Authentication key* and keys used to establish a secure
messaging, the cryptographic private key operations SHALL be performed only through the contact interface
or the virtual contact interface.

Symmetric cryptographic operations are not mandated for the contactless interface, but departments and
agencies may choose to supplement the basic functionality with storage for a symmetric Card
Authentication key and support for a corresponding set of cryptographic operations. For example, if a
department or agency wants to utilize Advanced Encryption Standard (AES) based challenge/response for
physical access, the PIV Card must contain storage for the AES key and support AES operations through
the contactless interface. Algorithms and key sizes for each PIV key type are specified in [[SP 800-78]](../_Appendix/references.md#ref-SP-800-78).

The PIV Card has both mandatory keys and optional keys:

- The *PIV Authentication key* is a mandatory asymmetric private key that supports card and cardholder
    authentication for an interoperable environment.
- The *asymmetric Card Authentication key* is a mandatory private key that supports card authentication
    for an interoperable environment.
- The *symmetric (secret) Card Authentication key* supports card authentication for physical access, and
    it is optional.
- The *digital signature key* is an asymmetric private key supporting document signing, and it is
    mandatory, unless the cardholder does not have a government-issued email account at the time of
    credential issuance.
- The *key management key* is an asymmetric private key supporting key establishment and transport,
    and it is mandatory, unless the cardholder does not have a government-issued email account at the
    time of credential issuance. Optionally, up to twenty retired key management keys may also be
    stored on the PIV Card.
- The *PIV Card Application Administration Key* is a symmetric key used for personalization and post-issuance activities, and it is optional.
- The PIV Card MAY include additional key(s) for use with secure messaging. These keys are defined
    in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73) or [[SP 800-78]](../_Appendix/references.md#ref-SP-800-78).

All PIV cryptographic keys SHALL be generated within a [[FIPS140]](../_Appendix/references.md#ref-FIPS140) validated cryptographic module with
overall validation at Level 2 or above. In addition to an overall validation of Level 2, the PIV Card SHALL
provide Level 3 physical security to protect the PIV private keys in storage. The scope of the validation
for the PIV Card SHALL include all cryptographic operations performed over both the contact and
contactless interfaces (1) by the PIV Card Application, (2) as part of secure messaging as specified in this
section, and (3) as part of remote post issuance updates as specified in [Section 2.9.2](requirements.md#s-2-9-2). Specific algorithm
testing requirements for the cryptographic operations performed by the PIV Card Application are
specified in [[SP 800-78]](../_Appendix/references.md#ref-SP-800-78).

Requirements specific to storage and access for each key are detailed below. Where applicable, key
management requirements are also specified.

- **PIV Authentication Key.** This key SHALL be generated on the PIV Card. The PIV Card SHALL NOT
    permit exportation of the PIV Authentication key. The cryptographic operations that use the PIV
    Authentication key SHALL be available only through the contact and the virtual contact interfaces of the
    PIV Card. Private key operations MAY be performed using an activated PIV Card without explicit
    user action (e.g., the PIN need not be supplied for each operation).

The PIV Card SHALL store a corresponding X.509 certificate to support validation of the public key.
The X.509 certificate SHALL include the FASC-N in the subject alternative name extension using the
pivFASC-N attribute to support physical access procedures. The X.509 certificate SHALL also include
the UUID value from the GUID data element of the CHUID in the subject alternative name extension.
The UUID SHALL be encoded as a uniform resource identifier (URI), as specified in Section 3 of
[[RFC4122]](../_Appendix/references.md#ref-RFC4122). The expiration date of the certificate must be no later than the expiration date of the PIV
Card. The PIV Authentication certificate SHALL include a PIV NACI indicator (background
investigation indicator) extension (see Appendix B.2); this non-critical extension indicates the status
of the subject's background investigation at the time of card issuance.[^backgroundstatus] [Section 5](keymanagement.md#s-5) of this document
specifies the certificate format and the key management infrastructure for the PIV Authentication key.

+ **Asymmetric Card Authentication Key.** The asymmetric Card Authentication key MAY be generated
on the PIV Card or imported to the card. The PIV Card SHALL NOT permit exportation of the Card
Authentication key. Cryptographic operations that use the Card Authentication key SHALL be available
through the contact and the contactless interfaces of the PIV Card. Private key operations MAY be
performed using this key without card activation (e.g., the PIN need not be supplied for operations
with this key).

The PIV Card SHALL store a corresponding X.509 certificate to support validation of the public key.
The X.509 certificate SHALL include the FASC-N in the subject alternative name extension using the
pivFASC-N attribute to support physical access procedures. The X.509 certificate SHALL also include
the UUID value from the GUID data element of the CHUID in the subject alternative name extension.
The UUID SHALL be encoded as a URI, as specified in Section 3 of [[RFC4122]](../_Appendix/references.md#ref-RFC4122). The expiration date of
the certificate must be no later than the expiration date of the PIV Card. [Section 5](keymanagement.md#s-5) of this document
specifies the certificate format and the key management infrastructure for asymmetric PIV Card
Authentication keys.

+ **Symmetric Card Authentication Key.** The symmetric Card Authentication key MAY be imported
onto the card by the issuer or be generated on the card. If present, the symmetric Card Authentication
key SHALL be unique for each PIV Card and SHALL meet the algorithm and key size requirements stated
in [[SP 800-78]](../_Appendix/references.md#ref-SP-800-78). If present, cryptographic operations using this key MAY be performed without card
activation (e.g., the PIN need not be supplied for operations with this key). The cryptographic
operations that use the Card Authentication key SHALL be available through the contact and the
contactless interfaces of the PIV Card. This Standard does not specify key management protocols or
infrastructure requirements.

- **Digital Signature Key.** The PIV digital signature key SHALL be generated on the PIV Card. The PIV
    Card SHALL NOT permit exportation of the digital signature key. If present, cryptographic operations
    using the digital signature key MAY only be performed using the contact and the virtual contact
    interfaces of the PIV Card. Private key operations MAY not be performed without explicit user action,
    as this Standard requires the cardholder to authenticate to the PIV Card each time it performs a
    private key computation with the digital signature key.[^cardholderauthentication]


The PIV Card SHALL store a corresponding X.509 certificate to support validation of the public key.
The expiration date of the certificate must be no later than the expiration date of the PIV Card.
[Section 5](keymanagement.md#s-5) of this document specifies the certificate format and the key management infrastructure for
PIV digital signature keys.

- **Key Management Key.** This key MAY be generated on the PIV Card or imported to the card. If
    present, the cryptographic operations that use the key management key must only be accessible using
    the contact and the virtual contact interfaces of the PIV Card. Private key operations MAY be
    performed using an activated PIV Card without explicit user action (e.g., the PIN need not be
    supplied for each operation).


The PIV Card SHALL store a corresponding X.509 certificate to support validation of the public key.
[Section 5](keymanagement.md#s-5) of this document specifies the certificate format and the key management infrastructure for
key management keys.

- **PIV Card Application Administration Key.** If present, the PIV Card Application Administration
    Key SHALL be imported onto the card by the issuer. If present, the cryptographic operations that use
    the PIV Card Application Administration Key must only be accessible using the contact interface of
    the PIV Card.

[^backgroundstatus]: Other methods to indicate background investigative status will be explored in a future revision of this Standard.
[^cardholderauthentication]: [[NISTIR7863]](../references/#ref-NISTIR7863){:.footnote-ref}, *Cardholder Authentication for the PIV Digital Signature Key*, addresses the appropriate use of PIN caching related to digital signatures.

### 4.2.3 PIV Biometric Data Specifications {#s-4-2-3}

#### 4.2.3.1 Biometric Data Representation {#s-4-2-3-1}

The following biometric data SHALL be stored on the PIV Card:

- Two fingerprint templates. If no fingerprint images meeting the quality criteria of [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76) are
    available, the PIV Card SHALL nevertheless be populated with fingerprint records as specified in
    [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76).
- An electronic facial image.

The following biometric data MAY also be stored on the PIV Card:

- One or two iris images.
- Fingerprint templates for on-card comparison.[^fingerprints]

All biometric data SHALL be stored in the data elements referenced by [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73) and in conformance
with the preparation and formatting specifications of [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76).

[^fingerprints]: The on-card and off-card fingerprint reference data are stored separately and, as conformant instances of different formal fingerprint standards, are syntactically different. This is described more fully in [[SP 800-76]](../references/#ref-SP-800-76){:.footnote-ref}.

#### 4.2.3.2 Biometric Data Protection {#s-4-2-3-2}

The integrity of all biometric data, except for fingerprint templates for on-card comparison, SHALL be
protected using digital signatures as follows. The records SHALL be prepended with a Common Biometric
Exchange Formats Framework (CBEFF) header (referred to as CBEFF_HEADER) and appended with the
CBEFF signature block (referred to as the CBEFF_SIGNATURE_BLOCK) [[CBEFF]](../_Appendix/references.md#ref-CBEFF).

The format for a CBEFF_HEADER is specified in [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76).

The CBEFF_SIGNATURE_BLOCK contains the digital signature of the biometric data and thus
facilitates the verification of integrity of the biometric data. The CBEFF_SIGNATURE_BLOCK SHALL be
encoded as a CMS external digital signature as specified in [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76). The algorithm and key size
requirements for the digital signature and digest algorithm are detailed in [[SP 800-78]](../_Appendix/references.md#ref-SP-800-78).

For signatures created before October 15, 2015, the public key required to verify the digital signature
SHALL be contained in a content signing certificate, which SHALL be issued under the id-fpki-common-piv-contentSigning, id-fpki-common-devices, id-fpki-common-devicesHardware, id-fpki-common-hardware,
or id-fpki-common-High policy of [[COMMON]](../_Appendix/references.md#ref-COMMON).[^crosscert] For signatures created on or after October 15, 2015,
the public key required to verify the digital signature SHALL be contained in a content signing certificate,
which SHALL be issued under the id-fpki-common-piv-contentSigning policy of [[COMMON]](../_Appendix/references.md#ref-COMMON). The content
signing certificate SHALL also include an extended key usage (*extKeyUsage*) extension asserting id-PIV-content-signing. If the signature on the biometric was generated with a different key than the signature on
the CHUID, the certificates field of the CMS external digital signature SHALL include the content signing
certificate required to verify the signature on the biometric. Otherwise, the *certificates* field SHALL be
omitted. Additional descriptions for the PIV object identifiers are provided in Appendix B. The content
signing certificate on a valid PIV Card (one that is neither expired nor revoked) SHALL NOT be expired.

[^crosscert]: For legacy PKIs, as defined in [Section 5.4](../keymanagement/#s-5-4){:.footnote-ref}, the certificates MAY be issued under a department or agency-specific policy that has been cross-certified with the Federal Bridge CA (FBCA) at the Medium Hardware or High Assurance Level.

#### 4.2.3.3 Biometric Data Access {#s-4-2-3-3}

The PIV biometric data, except for fingerprint templates for on-card comparison, that is stored on the card

- SHALL be readable through the contact interface and after the presentation of a valid PIN; and
- MAY optionally be readable through the virtual contact interface and after the presentation of a valid
    PIN.

On-card biometric comparison MAY be performed over the contact and the contactless interfaces of the
PIV Card to support card activation ([Section 4.3.1](frontend.md#s-4-3-1)) and cardholder authentication ([Section 6.2.2](authentication.md#s-6-2-2)). The
fingerprint templates for on-card comparison SHALL NOT be exportable. If implemented, on-card biometric
comparison SHALL be implemented and used in accordance with [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73) and [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76).

### 4.2.4 PIV Unique Identifiers {#s-4-2-4}

A cardholder is authenticated through identification and authentication (I&A) using the PIV Card (and its
identifier) in authentication mechanisms described in [Section 6](authentication.md#s-6). The authenticated identity MAY then be
used as the basis for making authorization decisions. Unique identifiers for both authentication and
authorization are provided in this Standard in order to uniquely identify the cardholder. The two types of
identifiers that serve as identification (of the cardholder) for authentication and authorization purposes,
are described as follows:

Card identifiers
:   Each PIV card contains a UUID and a FASC-N that uniquely identify the card and, by
correspondence, the cardholder. These two card identifiers are represented in all of the authentication
data elements for the purpose of binding the PIV data elements to the same PIV Card.

Cardholder Identifiers
:   Other identifiers MAY be present in credentials on the PIV Card that identity the cardholder rather than
the card. Examples include the subject name and names that may appear in the subjectAltName
extension in the PIV Authentication certificate.

## 4.3 PIV Card Activation {#s-4-3}

The PIV Card SHALL be activated[^activation] to perform privileged[^priviledged] operations such as using the PIV Authentication
key, digital signature key, and key management key. The PIV Card SHALL be activated for privileged
operations only after authenticating the cardholder or the appropriate card management system.
Cardholder activation is described in [Section 4.3.1](frontend.md#s-4-3-1) and card management system activation is described in
[Section 4.3.2](frontend.md#s-4-3-2).

[^activation]: Activation in this context refers to the unlocking of the PIV Card Application so privileged operations can be performed.
[^priviledged]: A read of a CHUID or use of the Card Authentication key is not considered a privileged operation.

### 4.3.1 Activation by Cardholder {#s-4-3-1}

PIV Cards SHALL implement user-based cardholder activation to allow privileged operations using PIV
credentials held by the card. At a minimum, the PIV Card SHALL implement PIN-based cardholder
activation in support of interoperability across departments and agencies. Other card activation
mechanisms (e.g., OCC card activation), only as specified in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73), MAY be implemented and SHALL
be discoverable. For PIN-based cardholder activation, the cardholder SHALL supply a numeric PIN. The
verification data SHALL be transmitted to the PIV Card and checked by the card. If the verification data
check is successful, the PIV Card is activated. The PIV Card SHALL include mechanisms to block
activation of the card after a number of consecutive failed activation attempts. The number of allowable
consecutive failed activation attempts MAY vary by activation mechanism.

The PIN should not be easily guessable or otherwise individually identifiable in nature (e.g., part of a
Social Security Number, phone number). The PIN SHALL be a minimum of six digits in length. The PIV Card SHALL compare the chosen PIN against a list of at least 10 commonly-chosen values (e.g., 000000, 123456) and require the choice of a different value if one of those is selected by the user.

### 4.3.2 Activation by Card Management System {#s-4-3-2}

PIV Cards MAY support card activation by the card management system to support card personalization
and post-issuance card update. To activate the card for personalization or update, the card management
system SHALL perform a challenge response protocol using cryptographic keys stored on the card in
accordance with [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73). When cards are personalized, PIV Card Application Administration Keys
SHALL be set to be specific to each PIV Card. That is, each PIV Card SHALL contain a unique PIV Card
Application Administration Key. PIV Card Application Administration Keys SHALL meet the algorithm
and key size requirements stated in [[SP 800-78]](../_Appendix/references.md#ref-SP-800-78).

## 4.4 Card Reader Requirements {#s-4-4}

This section provides minimum requirements for the contact and contactless card readers. Also, this
section provides requirements for PIN input devices. Further requirements are specified in [[SP 800-96]](../_Appendix/references.md#ref-SP-800-96).

### 4.4.1 Contact Reader Requirements {#s-4-4-1}

Contact card readers SHALL conform to the [[ISO7816]](../_Appendix/references.md#ref-ISO7816) standard for the card-to-reader interface. These
readers SHALL conform to the Personal Computer/Smart Card (PC/SC) Specification [[PCSC]](../_Appendix/references.md#ref-PCSC) for the reader-to-host system interface in general desktop computing environment. Specifically, the contact card readers
SHALL conform to the requirements specified in [[SP 800-96]](../_Appendix/references.md#ref-SP-800-96). In systems where the readers are not
connected to general-purpose desktop computing systems, the reader-to-host system interface is not
specified in this Standard.

### 4.4.2 Contactless Reader Requirements {#s-4-4-2}

Contactless card readers SHALL conform to [[ISO14443]](../_Appendix/references.md#ref-ISO14443) standard for the card-to-reader interface and data
transmitted over the [[ISO14443]](../_Appendix/references.md#ref-ISO14443) link SHALL conform to [[ISO7816]](../_Appendix/references.md#ref-ISO7816). In cases where these readers are
connected to general-purpose desktop computing systems, they SHALL conform to [[PCSC]](../_Appendix/references.md#ref-PCSC) for the reader-to-host system interface. Specifically, the contactless card readers SHALL conform to the requirements
specified in [[SP 800-96]](../_Appendix/references.md#ref-SP-800-96). In systems where the readers are not connected to general-purpose desktop
computing systems, the reader-to-host system interface is not specified in this Standard.


### 4.4.3 Reader Resilience and Flexibility {#s-4-4-3}

The international standard ISO/IEC 24727 [[ISO24727]](../_Appendix/references.md#ref-ISO24727) enables a high degree of interoperability between
electronic credentials and relying subsystems by means of an adaptation layer. To make interoperability
among PIV System middleware, card readers, and credentials more resilient and flexible, the Department
of Commerce will evaluate ISO/IEC 24727 and propose an optional profile of ISO/IEC 24727 in [[SP 800-73]](../_Appendix/references.md#ref-SP-800-73). The profile will explain how profile-conformant middleware, card readers, and PIV Cards can be
used interchangeably with middleware, card readers, and PIV Cards currently deployed.

Specifications of the profile will become effective, as an optional means to implement PIV System
readers and middleware, when OMB determines that the profile specifications are complete and ready for
deployment.

### 4.4.4 Card Activation Device Requirements {#s-4-4-4}

When the PIV Card is used with OCC data or a PIN for physical access, the input device SHALL be
integrated with the PIV Card reader. When the PIV Card is used with OCC data or a PIN for logical
access (e.g., to authenticate to a Web site or other server), the input device is not required to be integrated
with the PIV Card reader. If the input device is not integrated with the PIV Card reader, the OCC data or
the PIN SHALL be transmitted securely and directly to the PIV Card for card activation.

The specifications for fingerprint capture devices for on-card comparison are given in [[SP 800-76]](../_Appendix/references.md#ref-SP-800-76).

Malicious code could be introduced into the PIN capture and biometric reader devices for the purpose of
compromising or otherwise exploiting the PIV Card. General good practice to mitigate malicious code
threats is outside the scope of this document.[^maliciouscode]

[^maliciouscode]: See SP 800-53, *Recommended Security Controls for Federal Information Systems and Organizations* [[SP 800-53]](../references/#ref-SP-800-53){:.footnote-ref}.


