# action-pip-config

GitHub action that sets `pip.conf`.
Useful for private pypi repositories

## Usage
```yaml
steps:
  - name: Install Python
    uses: actions/setup-python@v2
    with:
        python-version: '3.9'

  - uses: innodatalabs/action-pip-conf@1.0.0
    with:
        pip-conf: ${{ secrets.PIP_CONF }}

  - name: Install private package
    run: pip install my-private-package
```
