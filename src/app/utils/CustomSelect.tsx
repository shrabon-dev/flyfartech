import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";

export default function CustomSelect({ label, value, onChange, options }) {
  return (
    <>
      <FormControl sx={{ m: 1, width: '100%',zIndex:9999,margin:'0px',height:'30px' }}>
        {/* <InputLabel>{label}</InputLabel> */}
        <Select
          value={value}
          onChange={onChange}
          input={<OutlinedInput label={label} />}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            backgroundColor: 'secondary.light',
            borderRadius: '4px',
            padding: '4px',
            fontFamily: 'PTRootUIWebMedium',
            fontSize: '14px',
            fontStyle: 'normal',
            height: '30px',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <>{options[0]}</>;
            }

            return selected.join(', ');
          }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 48 * 4.5 + 8,
                width: 250,
              },
            },
          }}
        >
          {/* <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem> */}
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
