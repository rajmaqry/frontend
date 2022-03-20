import React, { Component } from "react";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
function getStyles(i, theme) {
  return {
    fontWeight: i["Select"]
      ? theme.typography.fontWeightRegular
      : theme.typography.fontWeightMedium
  };
}

class SelectButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: this.props.value
    };
  }

  render() {
    const handleChange = (e) => {
      this.props.onValueChange(e);
    };
    return (
      //<select defaultValue={this.props.value} onChange={(e) => handleChange(e)} className="feather-select">
      //     {Object.keys(this.props.options).map(i => <option className="feather-option" key={i} value={i} >{i.text}</option>)}
      //</select>
      <Select
        labelId={this.props.id}
        id={this.props.id}
        label="Age"
        value={this.props.value}
        onChange={(e) => handleChange(e)}
        input={<OutlinedInput label="test" />}
        MenuProps={MenuProps}
      >
        {Object.keys(this.props.options).map((i) => (
          <MenuItem key={i} value={i}>
            {this.props.options[i].text}
          </MenuItem>
        ))}
      </Select>
    );
  }
}
export default SelectButton;
