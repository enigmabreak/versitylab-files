# Versitylab Files

Welcome to the official file repository for Versity. This repository serves as the central storage backend for the static academic assets, study materials, and question papers that power the Versity edtech platform for MAKAUT students.

## Repository Structure

The files are organized into the following directories to ensure easy management and integration with the main application:

* **`/Books`**: Standard reference books and essential textbooks covering the university curriculum.
* **`/Materials`**: Curated study notes, structured revision plans, and comprehensive subject guides.
* **`/PYQs`**: Previous Year Question papers to assist students with exam pattern analysis and preparation.
* **`/Syllabus`**: Official, up-to-date curriculum documents and module breakdowns.
* **`guide.pdf`**: The primary reference document detailing the navigation and usage of the stored resources.

## Usage and Integration

For developers and maintainers of the Versity platform, this repository isolates heavy static assets from the primary application logic. 

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/enigmabreak/versitylab-files.git](https://github.com/enigmabreak/versitylab-files.git)
   ```

2. **Integration:** These directories can be served directly via your backend infrastructure or fetched dynamically from the frontend to populate student dashboards without bloating the core application codebase.

3. **Updating Content:** When adding new resources, ensure they are placed in the appropriate directory. It is highly recommended to group files by semester or subject code for scalability.

## Contributing Guidelines

To maintain a high standard of academic resources:

* Ensure all uploaded documents, particularly scanned notes and question papers, are highly legible.
* Use strict and consistent naming conventions (e.g., `Computer_Organization_2025_PYQ.pdf`) so the frontend application can reliably parse, filter, and render the files.
* Verify that any new syllabus documents or materials align with the current MAKAUT curriculum.
