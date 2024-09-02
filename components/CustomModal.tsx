import React from 'react';
import { Modal, Text, View, Button, TouchableOpacity } from 'react-native';
import { chatDataProps } from '@/types/type';

interface MatchModalProps {
  visible: boolean;
  profile: chatDataProps | null;
  onClose: () => void;
}

const MatchModal: React.FC<MatchModalProps> = ({ visible, profile, onClose }) => {

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View className='flex-1 justify-center items-center bg-black bg-opacity-50'>
        <View className='bg-white p-6 rounded-lg w-4/5'>
          <Text className='text-xl font-bold text-center mb-4'>It's a Match!</Text>
          {profile && (
            <Text className='text-lg text-center mb-6'>
              {`You and ${profile.name} matched!`}
            </Text>
          )}
          <TouchableOpacity 
            className='bg-blue-500 p-3 rounded-lg'
            onPress={onClose}
          >
            <Text className='text-white text-center text-lg'>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MatchModal;
