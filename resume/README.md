# Resume source

`resume.json` is the source of truth for Caleb Rogers's published resume content and contact URLs.

Regenerate both public files from the repository root:

```bash
python3 scripts/generate_resume.py
```

The generator requires `python-docx` and `reportlab` and writes:

- `public/resume/Caleb_Rogers_Software_Engineer_Resume.pdf`
- `public/resume/Caleb_Rogers_Software_Engineer_Resume.docx`

The website resume page imports the same JSON for its visible contact links and LinkedIn metadata.
