using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CampBooking.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class updatecampDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Rating",
                table: "Camps",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Camps");
        }
    }
}
