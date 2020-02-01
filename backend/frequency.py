"""Convert audio data into PSD."""
import soundfile
import numpy as np
from spectrum import Periodogram


def audio_to_psd(file, hz=1.0):
    """Convert audio data into PSD.

    Args:
        file (str): Path to audio file.
        hz (float): Frequency that the audio is split up.

    Returns:
        list: List of PSDs at sequential periods in the file
    """
    sig, samplerate = soundfile.read(file)
    period = int(samplerate / hz)
    psds = []
    if len(sig.shape) > 1:  # If not mono, make mono
        sig = sig.T[0]
    for i in range(period, sig.shape[0], period):
        p = Periodogram(sig[(i - period):i], sampling=samplerate)
        p.run()
        psds.append(list(p.psd))
    return psds
