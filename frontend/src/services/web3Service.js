import { ethers } from 'ethers';
import CampusContractABI from '../contracts/CampusContract.json';

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS || '0x...';
const NETWORK_ID = process.env.REACT_APP_NETWORK_ID || '80001'; // Mumbai testnet

class Web3Service {
  constructor() {
    this.provider = null;
    this.signer = null;
    this.contract = null;
    this.account = null;
  }

  // Initialize web3 service
  async initialize() {
    if (window.ethereum) {
      try {
        this.provider = new ethers.BrowserProvider(window.ethereum);
        this.signer = await this.provider.getSigner();
        this.account = await this.signer.getAddress();
        
        // Initialize contract
        this.contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          CampusContractABI,
          this.signer
        );
        
        return {
          success: true,
          account: this.account,
          network: await this.provider.getNetwork(),
        };
      } catch (error) {
        console.error('Web3 initialization failed:', error);
        return { success: false, error: error.message };
      }
    } else {
      return { success: false, error: 'MetaMask not installed' };
    }
  }

  // Issue digital badge to student
  async issueBadge(studentAddress, badgeType, metadata) {
    try {
      if (!this.contract) {
        throw new Error('Contract not initialized');
      }

      const tx = await this.contract.issueBadge(
        studentAddress,
        badgeType,
        metadata || ''
      );

      const receipt = await tx.wait();
      return {
        success: true,
        transactionHash: receipt.hash,
        badgeId: receipt.logs[0].data,
      };
    } catch (error) {
      console.error('Failed to issue badge:', error);
      throw new Error(error.message || 'Failed to issue badge');
    }
  }

  // Verify student identity
  async verifyIdentity(studentAddress) {
    try {
      if (!this.contract) {
        throw new Error('Contract not initialized');
      }

      const isVerified = await this.contract.isStudentVerified(studentAddress);
      return isVerified;
    } catch (error) {
      console.error('Identity verification failed:', error);
      return false;
    }
  }

  // Get student badges
  async getStudentBadges(studentAddress) {
    try {
      if (!this.contract) {
        throw new Error('Contract not initialized');
      }

      const badgeCount = await this.contract.getBadgeCount(studentAddress);
      const badges = [];

      for (let i = 0; i < badgeCount; i++) {
        const badge = await this.contract.getBadge(studentAddress, i);
        badges.push({
          id: badge.id.toString(),
          type: badge.badgeType,
          issuer: badge.issuer,
          issueDate: new Date(badge.timestamp * 1000),
          metadata: badge.metadata,
        });
      }

      return badges;
    } catch (error) {
      console.error('Failed to get badges:', error);
      return [];
    }
  }

  // Record attendance on blockchain
  async recordAttendance(studentAddress, classId, timestamp) {
    try {
      if (!this.contract) {
        throw new Error('Contract not initialized');
      }

      const tx = await this.contract.recordAttendance(
        studentAddress,
        classId,
        timestamp || Math.floor(Date.now() / 1000)
      );

      const receipt = await tx.wait();
      return {
        success: true,
        transactionHash: receipt.hash,
      };
    } catch (error) {
      console.error('Failed to record attendance:', error);
      throw new Error(error.message || 'Failed to record attendance');
    }
  }

  // Issue certificate
  async issueCertificate(studentAddress, certificateData) {
    try {
      if (!this.contract) {
        throw new Error('Contract not initialized');
      }

      const tx = await this.contract.issueCertificate(
        studentAddress,
        certificateData.courseId,
        certificateData.grade,
        certificateData.issueDate || Math.floor(Date.now() / 1000),
        certificateData.metadata || ''
      );

      const receipt = await tx.wait();
      return {
        success: true,
        transactionHash: receipt.hash,
        certificateId: receipt.logs[0].data,
      };
    } catch (error) {
      console.error('Failed to issue certificate:', error);
      throw new Error(error.message || 'Failed to issue certificate');
    }
  }

  // Get attendance record
  async getAttendanceRecord(studentAddress, classId) {
    try {
      if (!this.contract) {
        throw new Error('Contract not initialized');
      }

      const attendanceCount = await this.contract.getAttendanceCount(studentAddress, classId);
      const records = [];

      for (let i = 0; i < attendanceCount; i++) {
        const record = await this.contract.getAttendanceRecord(studentAddress, classId, i);
        records.push({
          timestamp: new Date(record.timestamp * 1000),
          verified: record.verified,
        });
      }

      return records;
    } catch (error) {
      console.error('Failed to get attendance records:', error);
      return [];
    }
  }

  // Check if connected to correct network
  async checkNetwork() {
    try {
      if (!this.provider) {
        return { correct: false, message: 'Provider not initialized' };
      }

      const network = await this.provider.getNetwork();
      const correctNetwork = network.chainId.toString() === NETWORK_ID;

      return {
        correct: correctNetwork,
        currentNetwork: network.name,
        requiredNetwork: NETWORK_ID,
      };
    } catch (error) {
      console.error('Network check failed:', error);
      return { correct: false, message: error.message };
    }
  }

  // Switch network
  async switchNetwork() {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${parseInt(NETWORK_ID).toString(16)}` }],
      });
      return { success: true };
    } catch (error) {
      // If network not added, add it
      if (error.code === 4902) {
        return await this.addNetwork();
      }
      throw error;
    }
  }

  // Add network to MetaMask
  async addNetwork() {
    const networkParams = {
      chainId: `0x${parseInt(NETWORK_ID).toString(16)}`,
      chainName: 'Mumbai Testnet',
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
      blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    };

    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [networkParams],
      });
      return { success: true };
    } catch (error) {
      throw new Error('Failed to add network');
    }
  }

  // Disconnect wallet
  disconnect() {
    this.provider = null;
    this.signer = null;
    this.contract = null;
    this.account = null;
  }

  // Get current account
  getAccount() {
    return this.account;
  }

  // Get contract instance
  getContract() {
    return this.contract;
  }

  // Get provider
  getProvider() {
    return this.provider;
  }

  // Check if web3 is available
  isWeb3Available() {
    return !!window.ethereum;
  }

  // Listen to account changes
  onAccountsChanged(callback) {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', callback);
    }
  }

  // Listen to chain changes
  onChainChanged(callback) {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', callback);
    }
  }

  // Remove listeners
  removeListeners() {
    if (window.ethereum) {
      window.ethereum.removeAllListeners();
    }
  }
}

export default new Web3Service();