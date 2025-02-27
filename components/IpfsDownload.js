import React  from 'react';
import useIPFS from '../hooks/useIPFS';

const IPFSDownload = ({ hash, filename }) => {

  const file = useIPFS(hash, filename);

  return (
    <div>
      {file ? (
        <div className="download-component">
          <a className="download-button" href="https://cloudflare-ipfs.com/ipfs/QmUATfMK5QvphoEmHXna4nRB2mPoJx3GprAX9Q4baoEGPg" download="IMG_3110_Original">Download</a>
        </div>
      ) : (
        <p>Downloading file...</p>
      )}
    </div>
  );
};

export default IPFSDownload;