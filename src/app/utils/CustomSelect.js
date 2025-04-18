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
            padding: {xs:'0px',md:'4px'},
            fontFamily: 'PTRootUIWebMedium',
            fontSize: {xs:'8px',md:'14px'},
            fontStyle: 'normal',
            height: '30px',
            zIndex: 99,
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            zIndex: '999 !important',
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
            <MenuItem key={option} value={option} sx={{minHeight:{xs:'26px',md:'40px'},fontSize:{xs:'8px',md:'14px'},fontFamily: 'PTRootUIWebMedium'}}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
