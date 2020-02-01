"""Generate a dummy spectrum changing over time."""
import matplotlib.pyplot as plt
import numpy as np
import scipy.stats
import json
with open('dummy.json', 'w') as f:
    data = json.dumps([list(scipy.stats.norm.pdf(np.linspace(-8, 8, 8), loc=i))
                       for i in range(-8, 8)])
    print(data, file=f)
