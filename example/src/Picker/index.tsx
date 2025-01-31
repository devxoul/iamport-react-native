import React from 'react';
import { Select } from 'native-base';

type PickerProps = {
  data: any[];
  selectedValue: any;
  onValueChange?: ((value: any) => void) | undefined;
};

function Picker(props: PickerProps) {
  return (
    <Select
      mb={2}
      flex={1}
      borderColor={'transparent'}
      selectedValue={props.selectedValue}
      onValueChange={props.onValueChange}
    >
      {props.data.map((e, index) => {
        const { label, value } = e;
        return <Select.Item label={label} value={value} key={index} />;
      })}
    </Select>
  );
}

export default Picker;
