import siteCodeLicenseText from "../../LICENSE-CODE?raw";
import siteContentLicenseText from "../../LICENSE-CONTENT?raw";

export const carrNexaSoftwareLicenseEntry = {
  id: "carrnexa-software",
  title: "CarrNexa proprietary software license",
  summary:
    "Some CarrNexa repositories use a separate source-available license. If a repository points at this page, follow that license instead of assuming the website repo's terms apply.",
  text: String.raw`CARRNEXA PROPRIETARY LICENSE

Copyright (c) 2026 Christopher Carr McMahon.
All rights reserved.

This Software and associated documentation files (the "Software") are the
proprietary property of Christopher Carr McMahon (the "Licensor"). This is a
proprietary, source-available license and is not an open-source license.

1. GRANT OF LICENSE
   The Licensor grants you a limited, non-exclusive, non-transferable,
   revocable license to access, view, and read the Source Code of the Software
   solely for the purposes of security auditing, educational analysis, and
   verification of functionality.

   Limited Execution for Auditing:
   You may compile and execute the Software solely for the purpose of
   security auditing or verification of functionality, provided that such
   execution occurs only in a private, non-production, non-public, and
   non-commercial environment. You may not deploy, host, or operate the
   Software in any capacity that provides functionality to end users or
   third parties.

   Except as expressly permitted above, this license does not grant
   permission to compile, execute, run, deploy, or otherwise use the Software
   in any operational capacity.

2. RESTRICTIONS
   You may NOT:
   (a) Use the Software for any commercial purpose.
   (b) Distribute, publish, sublicense, rent, lease, lend, or make the
       Software available to any third party.
   (c) Modify, decompile, disassemble, or reverse engineer the Software,
       except to the extent strictly necessary for the limited purposes
       described in Section 1 (e.g., debugging).
   (d) Use the Software to create a competitive product or service.
   (e) Remove or alter any copyright, proprietary notices, or attribution.

3. TERMINATION
   Any breach of this License automatically terminates all rights granted
   herein. Upon termination, you must immediately cease all use of the
   Software and destroy any copies in your possession.

4. NO WARRANTY
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
   DEALINGS IN THE SOFTWARE.`,
} as const;

export const siteLicenseEntries = [
  {
    id: "site-code",
    title: "Site source code",
    summary:
      "Unless a file says otherwise, the code in this repository is released under the MIT License. You can use, modify, and redistribute it, including for commercial work, as long as the license notice stays with the code.",
    text: siteCodeLicenseText,
  },
  {
    id: "site-content",
    title: "Site content and brand assets",
    summary:
      "Site content, writing, and brand assets are released under CC BY-NC 4.0 unless a file says otherwise. Attribution is required, and commercial reuse needs separate permission.",
    text: siteContentLicenseText,
  },
] as const;
