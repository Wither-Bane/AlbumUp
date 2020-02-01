"""Generate json spectrum data."""
from spectrum import arma_estimate, arma2psd, marple_data
import json
with open('data.json', 'w') as f:
    ar, ma, rho = arma_estimate(marple_data, 15, 15, 30)
    psd = arma2psd(ar, ma, rho=rho)
    print(json.dumps(list(psd)), file=f)
