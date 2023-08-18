import ToneSelector from 'react-select'; /* Imclude Select With Image */

/* Components */
import Textlengthrange from '../../dashboard/Textlengthrange'; /* Include Textlengthrange */

/* Form Title Images */
import Instagram from '../../../assets/images/dashboard/form-title-pics/instagram.svg';

const Instagramcaption = (props) => {

  /* Placeholder For Instagram Textarea */
  const keybenifits_placeholder = "[Post details]\n[Fun facts]\n[Any instructions]";

  return (
    <div>
        <div className='bg-white db-heading-1 px-4 py-3 db-header bb-1px-link-water'>
            <img src={Instagram} alt="" className='me-2' />
            Instagram Captions
        </div>
        <div className='bg-white db-heading-2 px-4 py-3 bb-1px-link-water'>
            Develop appealing captions and written content for Instagram.
        </div>
        <div className='bg-white px-4 py-3'>
            <div className="form-group mb-3">
                <label className='form-label d-flex justify-content-between mb-3'>
                    <div>
                        Post Title
                    </div> 
                    <div>
                        {props.productnameCount}/80
                    </div>
                </label>
                
                <input type="text" name="text" maxLength="80" onChange={props.onChange_handleChange} value={props.value_formData.text} className='form-control shadow-none' required/>
            </div>
            <div className="form-group mb-3">
                <label className='form-label d-flex justify-content-between mb-3'>
                    <div>
                        Key Benefits/Features
                    </div> 
                    <div>
                        {props.keywordsCount}/800
                    </div>
                </label>
                <textarea className='form-control shadow-none' maxLength="800" name="keywords" onChange={props.onChange_handleChange} value={props.value_formData.keywords} rows="5" placeholder={keybenifits_placeholder} required></textarea>
            </div>
            <div className="form-group mb-3">
                <label className='form-label d-flex justify-content-between mb-3'>
                    <div>
                        Tone of Voice
                    </div>
                </label>
                <ToneSelector
                        placeholder="Try “Witty”, “Professional”, Or “Adventurous”"
                        value={props.selectToneValue}
                        options={props.selectToneOption}
                        onChange={props.onChange_handleToneChange}
                        getOptionLabel={e => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {e.icon}
                            <span style={{ marginLeft: 10 }}>{e.text}</span>
                        </div>
                        )}
                        className="shadow-none outline-none form-control"
                />
            </div>
            <div className="form-group mb-3">
                <label className='form-label d-flex justify-content-between mb-3'>
                    <div>
                        Length
                    </div> 
                </label>
                <Textlengthrange  onSelectCharacters={props.onSelectCharacters} />
            </div>
        </div>
    </div>
  )
}

export default Instagramcaption