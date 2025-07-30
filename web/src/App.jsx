import { useState, useEffect } from 'react';
import { FaWallet, FaPiggyBank, FaMoneyBillWave, FaGem, FaCog, FaMapMarkerAlt, FaKeyboard, FaSignOutAlt, FaUsers, FaShieldAlt, FaAmbulance, FaWrench, FaYoutube, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { MdLocalPolice } from "react-icons/md";
import { Icon } from '@iconify/react';
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);
  const [playerData, setPlayerData] = useState({
    avatar: 'https://cdn.discordapp.com/icons/1399793444427141161/8f5cdb64cc2e894c86110591752e94f1.jpg?size=1024',
    name: 'Gallodevv',
    job: 'Unemployed',
    secondJob: 'Unemployed',
    cashMoney: 1000000,
    bankMoney: 1000000,
    blackMoney: 1000000,
    coins: 1000000,
  });
  const [statusData, setStatusData] = useState({
    playersOnline: 100,
  });
  const [labels, setLabels] = useState({
    cashMoney: 'Cash',
    bankMoney: 'Bank',
    blackMoney: 'Black Money',
    coins: 'Coins',
    settings: 'Settings',
    map: 'Map',
    discord: 'Discord',
    bindings: 'Bindings',
    exit: 'Exit',
    playersOnline: 'Players Online',
    policeStatus: 'Police',
    emsStatus: 'EMS',
    mechanicStatus: 'Mechanic',
  });
  const [accounts, setAccounts] = useState({
    cash: true,
    bank: true,
    black: true,
    coins: true
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

  const formatMoney = (amount) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (!visible) return null;

  return (
    <div className={`pause-container ${visible ? 'visible' : ''}`}>
      <div className="pause-menu">
        <div className="menu-header">
          <div className="player-section">
            <div className="avatar-container">
              <img src={playerData.avatar} alt="Avatar" className="player-avatar" />
              <div className="avatar-status"></div>
            </div>
            <div className="player-details">
              <h1 className="player-name">{playerData.name}</h1>
              <div className="job-badges">
                <span className="primary-job">{playerData.job}</span>
                {playerData.showSecondJob && playerData.secondJob && (
                  <span className="secondary-job">{playerData.secondJob}</span>
                )}
              </div>
            </div>
          </div>

          <div className="money-grid">
            {accounts.cash && (
              <div className="money-card cash">
                <div className="money-icon">
                  <FaMoneyBillWave />
                </div>
                <div className="money-info">
                  <span className="money-label">{labels.cashMoney}</span>
                  <span className="money-amount">{formatMoney(playerData.cashMoney)}</span>
                </div>
              </div>
            )}
            {accounts.bank && (
              <div className="money-card bank">
                <div className="money-icon">
                  <FaPiggyBank />
                </div>
                <div className="money-info">
                  <span className="money-label">{labels.bankMoney}</span>
                  <span className="money-amount">{formatMoney(playerData.bankMoney)}</span>
                </div>
              </div>
            )}
            {accounts.black && (
              <div className="money-card black">
                <div className="money-icon">
                  <FaWallet />
                </div>
                <div className="money-info">
                  <span className="money-label">{labels.blackMoney}</span>
                  <span className="money-amount">{formatMoney(playerData.blackMoney)}</span>
                </div>
              </div>
            )}
            {accounts.coins && (
              <div className="money-card coins">
                <div className="money-icon">
                  <FaGem />
                </div>
                <div className="money-info">
                  <span className="money-label">{labels.coins}</span>
                  <span className="money-amount">{playerData.coins}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="main-actions">
          <button onClick={handleOpenSettings} className="action-btn settings-btn">
            <div className="btn-icon">
              <FaCog />
            </div>
            <span className="btn-text">{labels.settings}</span>
          </button>
          
          <button onClick={handleOpenMap} className="action-btn map-btn">
            <div className="btn-icon">
              <FaMapMarkerAlt />
            </div>
            <span className="btn-text">{labels.map}</span>
          </button>
          
          <button className="action-btn discord-btn" onClick={() => handleSocialMedia('Discord')}>
            <div className="btn-icon">
              <FaDiscord />
            </div>
            <span className="btn-text">{labels.discord}</span>
          </button>
          
          <button className="action-btn bindings-btn" onClick={handleOpenBindings}>
            <div className="btn-icon">
              <FaKeyboard />
            </div>
            <span className="btn-text">{labels.bindings}</span>
          </button>
          
          <button className="action-btn exit-btn" onClick={handleExit}>
            <div className="btn-icon">
              <FaSignOutAlt />
            </div>
            <span className="btn-text">{labels.exit}</span>
          </button>
        </div>

        <div className="server-info">
          <div className="stats-grid">
            <div className="stat-item players">
              <FaUsers className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">{labels.playersOnline}</span>
                <span className="stat-value">{statusData.playersOnline}</span>
              </div>
            </div>
            
            <div className="stat-item police">
              <MdLocalPolice className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">{labels.policeStatus}</span>
                <span className="stat-value">{statusData.police || 0}</span>
              </div>
            </div>
            
            <div className="stat-item ems">
              <FaAmbulance className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">{labels.emsStatus}</span>
                <span className="stat-value">{statusData.ems || 0}</span>
              </div>
            </div>
            
            <div className="stat-item mechanic">
              <FaWrench className="stat-icon" />
              <div className="stat-content">
                <span className="stat-label">{labels.mechanicStatus}</span>
                <span className="stat-value">{statusData.mechanic || 0}</span>
              </div>
            </div>
          </div>
        </div>
                
        <div className="menu-footer">
          <div className="server-brand">
            <img src={playerData.avatar} alt="Server Logo" className="brand-logo" />
            <span className="brand-text">github.com</span>
          </div>
          
          <div className="social-media">
            <button onClick={() => handleSocialMedia('YouTube')} className="social-btn youtube">
              <FaYoutube />
            </button>
            <button onClick={() => handleSocialMedia('Twitter')} className="social-btn twitter">
              <FaTwitter />
            </button>
            <button onClick={() => handleSocialMedia('Instagram')} className="social-btn instagram">
              <FaInstagram />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;