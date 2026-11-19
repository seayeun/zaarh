WEYNE STUDENT HUB

FILES
index.html          Main student hub page
lab-4th-sem.html    LAB 4TH SEM Coming Soon page
lr-4th-sem.html     LR 4TH SEM Coming Soon page
style.css           Theme and responsive styling
script.js           Search and live local clock
resources.xml       Editable resource directory

RUN IN XAMPP
1. Extract this folder into xampp/htdocs/.
2. Start Apache.
3. Visit http://localhost/WEYNE_Student_Hub/

ADDING DOWNLOAD LINKS
Each resource card in index.html contains a commented-out <a> download link.
Remove the HTML comment markers and replace the href with your file path.
Place downloadable files in a downloads folder beside index.html.

The live clock follows the visitor's computer/device local time.
JavaScript is used in script.js; it runs directly in the browser.

SEPARATE CATEGORY PAGES
-----------------------
biotechnology.html  Biotechnology resource page
tools.html          Tools page (includes Prompt Library — Coming Soon)

The main page links to each category page. The category pages use the same
WEYNE header, resource cards, theme, local clock and footer.

HOMEPAGE NAVIGATION UPDATE
--------------------------
The top navigation now uses HOME PAGE. LAB 4TH SEM and LR 4TH SEM links
and homepage shortcut cards have been removed from all HTML pages.

BIOTECHNOLOGY PAGE REFRESH
-------------------------
The Biotechnology page now has separate LR, ALR, Project Report and PPT
Front Page resource groups. File links remain commented out/placeholders.
The brighter colours and left-to-right hover glow are scoped only to
biotechnology.html; the homepage and Tools page retain their previous styling.

BIOTECHNOLOGY RESOURCE LINKS
----------------------------
Only biotechnology.html was updated with the supplied MediaFire links.
Each download/open button points to the exact URL supplied by the user.
The other HTML pages are unchanged. The stylesheet has a small additional
Biotechnology-only rule for link appearance and notes.

DIRECT DOWNLOAD SETUP — BIOTECHNOLOGY
-------------------------------------
Biotechnology download buttons now use local relative file paths with the
HTML download attribute. Upload/copy the following files into the same
server folder as biotechnology.html (WEYNE_Student_Hub/):

- Copy of LR BIO FULL.pdf
- Copy of LR BIO MID,BW.pdf
- Copy of LR BIO BOTH SIDE (2).pdf
- LR BIO COLOUR PAGE  (1).pdf
- ALR BIO FULL (1).pdf
- ALR BOTH SIDE SEPERATE PAGES (1).pdf
- ALR BOTH SIDE SEPERATE PAGES (1).docx
- ALR COLOUR PAGE ONLY (1).pdf
- ALR BIO mid pages (1).pdf
- PROJECT LAST PAGE HD NO QUALITY LOSS.docx
- Project-R front.docx.pdf
- Project-R front.docx

The links trigger browser downloads directly. Only biotechnology.html was
changed for this update; the other HTML pages are unchanged.
