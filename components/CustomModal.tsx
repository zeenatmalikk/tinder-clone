import React from "react";
import { Modal, Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface MatchModalProps {
  visible: boolean;
  profileName:string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const MatchModal: React.FC<MatchModalProps> = ({ visible, profileName,setShowModal }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      // onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>It's a Match!</Text>
          <TouchableOpacity onPress={()=>setShowModal(false)}>
            <Text style={styles.closeButton}>Say HI!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 16,
    color: "blue",
  },
});

export default MatchModal;
