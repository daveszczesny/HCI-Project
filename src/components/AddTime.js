import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const TimePicker = ({ options, value, onChange, label }) => {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-hour"
            className="autocomplete-form"
            options={options}
            value={value}
            onChange={(_, newValue) => {
                onChange(newValue);
            }}
            sx={{
                marginLeft: '2vw',
                marginRight: '2vw',
                width: '14vw', // Adjust the width to make it smaller
                height: '12vw',
                fontSize: '1em', // Adjust the font size to make it smaller
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        border: 'none', // Remove the border
                    },
                    '& .MuiAutocomplete-endAdornment': {
                        display: 'none', // Hide the dropdown arrow icon
                    },
                    '&:hover fieldset': {
                        border: 'none', // Remove the border on hover
                    },
                    '&.Mui-focused fieldset': {
                        border: 'none', // Remove the border on focus
                    },
                    '&.Mui-focused': {
                        boxShadow: 'none', // Remove the box-shadow on focus
                    },
                },
            }}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    );
}

export default TimePicker;