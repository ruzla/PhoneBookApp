using Microsoft.AspNetCore.Mvc;
using PhoneBookApp.API.Models;

namespace PhoneBookApp.API.Controllers
{
    [Route("api/phonebook")]
    [ApiController]
    public class PhoneBookController : ControllerBase
    {
        private readonly DataContext _context;

        public PhoneBookController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Contact>>> Get()
        {
            try
            {
                return Ok(await _context.Contacts.ToListAsync());
            } 
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }   
        }

        [HttpPost]
        public async Task<ActionResult<List<Contact>>> AddContact(Contact contact)
        {
            try
            {
                _context.Contacts.Add(contact);
                await _context.SaveChangesAsync();

                return Ok(await _context.Contacts.ToListAsync());
            } 
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<ActionResult<List<Contact>>> UpdateContact(Contact request)
        {
            try
            {
                var contact = await _context.Contacts.FindAsync(request.Id);
                if (contact == null)
                    return BadRequest("Contact not found.");

                contact.FirstName = request.FirstName;
                contact.LastName = request.LastName;
                contact.PhoneNumber = request.PhoneNumber;

                await _context.SaveChangesAsync();

                return Ok(await _context.Contacts.ToListAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Contact>>> Delete(int id)
        {
            try
            {
                var contact = await _context.Contacts.FindAsync(id);
                if (contact == null)
                    return BadRequest("Contact not found.");

                _context.Contacts.Remove(contact);
                await _context.SaveChangesAsync();

                return Ok(await _context.Contacts.ToListAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
