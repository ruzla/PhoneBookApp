using Microsoft.EntityFrameworkCore;
using PhoneBookApp.API.Models;

namespace PhoneBookApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Contact> Contacts { get; set; }
    }
}
