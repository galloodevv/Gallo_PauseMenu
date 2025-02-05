import { useState, useEffect } from 'react';
import { FaWallet, FaPiggyBank, FaMoneyBillWave, FaGem, FaCog, FaMapMarkerAlt, FaKeyboard, FaSignOutAlt, FaUsers, FaShieldAlt, FaAmbulance, FaWrench, FaYoutube, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false);
  const [playerData, setPlayerData] = useState({});
  const [statusData, setStatusData] = useState({});
  const [labels, setLabels] = useState({});
  const [accounts, setAccounts] = useState({
    cash: true,
    bank: true,
    black: true,
    coins: false
  });

  useEffect(() => {
    window.addEventListener('message', function(event) {
      const data = event.data;
      
      if (data.type === "ui") {
        setVisible(data.status);
        
        if (data.playerData) {
          setPlayerData(data.playerData);
        }
        
        if (data.statusData) {
          setStatusData(data.statusData);
        }

        if (data.labels) {
          setLabels(data.labels);
        }

        if (data.accounts) {
          setAccounts(data.accounts);
        }
      } else if (data.type === "updateStatus") {
        setStatusData(data.statusData);
      } else if (data.type === "openUrl") {
        window.invokeNative('openUrl', data.url);
      }
    });
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        handleCloseMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCloseMenu = () => {
    setVisible(false);
    fetch(`https://${GetParentResourceName()}/close`, {
      method: 'POST',
      body: JSON.stringify({})
    });
  };

  const handleExit = () => {
    setVisible(false);
    fetch(`https://${GetParentResourceName()}/exit`, {
      method: 'POST',
      body: JSON.stringify({})
    });
  };

  const handleOpenSettings = () => {
    fetch(`https://${GetParentResourceName()}/openSettings`, {
      method: 'POST',
      body: JSON.stringify({})
    });
  };

  const handleOpenMap = () => {
    fetch(`https://${GetParentResourceName()}/openMap`, {
      method: 'POST',
      body: JSON.stringify({})
    });
  };

  const handleOpenBindings = () => {
    fetch(`https://${GetParentResourceName()}/openBindings`, {
      method: 'POST',
      body: JSON.stringify({})
    });
  };

  const handleSocialMedia = (type) => {
    fetch(`https://${GetParentResourceName()}/openSocialMedia`, {
        method: 'POST',
        body: JSON.stringify({
            type: type
        })
    });
  };

  if (!visible) return null;

  return (
    <div className={`pause-container ${visible ? 'visible' : ''}`}>
      <div className="pause-menu">
        <div className="player-header">
          <div className="player-info">
            <img src={playerData.avatar} alt="Avatar" className="player-avatar" />
            <div className="text-info">
              <h1 className="player-name">{playerData.name}</h1>
              <div className="player-badges">
                <span className="badge job">
                  {playerData.job}
                </span>
                {playerData.showSecondJob && playerData.secondJob && (
                  <span className="badge second-job">
                    {playerData.secondJob}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="money-container">
            {accounts.cash && (
              <div className="money-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" className="icon animated-icon">
                  <path fill="currentColor" d="M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m112-96H16a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8m-8 128H24V72h208z"/>
                </svg>
                <span>{labels.cashMoney}</span>
                <span className="amount">{playerData.cashMoney}</span>
              </div>
            )}
            {accounts.bank && (
              <div className="money-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" className="icon animated-icon">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                    <path d="M14 13V9a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-2"/>
                    <rect width="30" height="22" x="4" y="19" rx="2"/>
                    <path d="M4 28h30m0-5v12M4 23v12m7-1h8m6 0h2"/>
                  </g>
                </svg>
                <span>{labels.bankMoney}</span>
                <span className="amount">{playerData.bankMoney}</span>
              </div>
            )}
            {accounts.black && (
              <div className="money-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Zm14-8c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"/>
                    <path strokeLinecap="round" d="M12 17.333c1.105 0 2-.746 2-1.666S13.105 14 12 14s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V18m0-8v.667m0 0c1.105 0 2 .746 2 1.666"/>
                  </g>
                </svg>
                <span>{labels.blackMoney}</span>
                <span className="amount">{playerData.blackMoney}</span>
              </div>
            )}
            {accounts.coins && (
              <div className="money-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" className="icon animated-icon">
                  <path fill="currentColor" d="M13 4.5C13 6.433 10.761 8 8 8S3 6.433 3 4.5S5.239 1 8 1s5 1.567 5 3.5m-.149 2.649C11.76 8.27 9.994 9 8 9s-3.76-.73-4.851-1.851A2.5 2.5 0 0 0 3 8c0 1.933 2.239 3.5 5 3.5s5-1.567 5-3.5q-.002-.442-.149-.851m0 3.5C11.76 11.77 9.994 12.5 8 12.5s-3.76-.73-4.851-1.851A2.5 2.5 0 0 0 3 11.5C3 13.433 5.239 15 8 15s5-1.567 5-3.5q-.002-.442-.149-.851"/>
                </svg>
                <span>{labels.coins}</span>
                <span className="amount">{playerData.vipMoney}</span>
              </div>
            )}
          </div>
        </div>

        <div className="menu-grid">
          <button onClick={handleOpenSettings} className="menu-button settings">
            <FaCog className="icon animated-icon" />
            <span>{labels.settings}</span>
          </button>
          <button onClick={handleOpenMap} className="menu-button map">
            <FaMapMarkerAlt className="icon animated-icon" />
            <span>{labels.map}</span>
          </button>
          <button className="menu-button discord" onClick={() => handleSocialMedia('Discord')}>
            <FaDiscord className="icon animated-icon" />
            <span>{labels.discord}</span>
          </button>
          <button className="menu-button bindings" onClick={handleOpenBindings}>
            <FaKeyboard className="icon animated-icon" />
            <span>{labels.bindings}</span>
          </button>
          <button className="menu-button exit" onClick={handleExit}>
            <FaSignOutAlt className="icon animated-icon" />
            <span>{labels.exit}</span>
          </button>
        </div>

        <div className="status-bar">
          <div className="status-item players-online">
            <FaUsers className="icon animated-icon" />
            <span>{labels.playersOnline}</span>
            <span className="status-value">{statusData.playersOnline}</span>
          </div>
          <div className="status-item police">
            <Icon icon="noto:police-officer" className="icon animated-icon" />
            <span>{labels.policeStatus}</span>
            <span className="status-value">{statusData.police}</span>
          </div>
          <div className="status-item ems">
            <Icon icon="fxemoji:ambulance" className="icon animated-icon" />
            <span>{labels.emsStatus}</span>
            <span className="status-value">{statusData.ems}</span>
          </div>
          <div className="status-item mechanic">
            <Icon icon="noto:mechanic" className="icon animated-icon" />
            <span>{labels.mechanicStatus}</span>
            <span className="status-value">{statusData.mechanic}</span>
          </div>
        </div>

        <div className="footer">
          <div className="website">github.com</div>
          <div className="server-logo">
            <img src={playerData.avatar} alt="Server Logo" className="server-logo-img" />
          </div>
          <div className="social-links">
            <button onClick={() => handleSocialMedia('YouTube')} className="social-icon youtube-icon">
                <FaYoutube className="icon animated-icon" />
            </button>
            <button onClick={() => handleSocialMedia('Twitter')} className="social-icon twitter-icon">
                <FaTwitter className="icon animated-icon" />
            </button>
            <button onClick={() => handleSocialMedia('Instagram')} className="social-icon instagram-icon">
                <FaInstagram className="icon animated-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;