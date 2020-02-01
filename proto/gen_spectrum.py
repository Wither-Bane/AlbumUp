"""Generate json spectrum data."""
from spectrum import arma_estimate, arma2psd, marple_data
from pylab import plot, axis, xlabel, ylabel, grid, log10
import json
with open('dummy.json', 'w') as f:
    ar, ma, rho = arma_estimate(marple_data, 15, 15, 30)
    psd = arma2psd(ar, ma, rho=rho, NFFT=4096)
    print(json.dumps(list(psd)), file=f)
