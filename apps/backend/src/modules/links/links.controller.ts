import { Body, Controller, Delete, Get, Headers, Param, Post, Query } from "@nestjs/common";
import { LinksService } from "./links.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateLinkEntity, GetLinkEntity, LinkEntity } from "./entities/link.entity";
import { CreateLinkDto } from "./dto/create-link.dto";
import { GetLinkDto } from "./dto/get-link.dto";
import { DeleteLinkDto } from "./dto/delete.link.dto";

@Controller("api/links")
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  @ApiTags("link")
  @ApiResponse({ type: GetLinkEntity, status: 200 })
  get(@Query() query: GetLinkDto, @Headers("host") host: string) {
    return this.linksService.get(query, host);
  }

  @Delete(":deleteKey")
  @ApiTags("link")
  @ApiResponse({ type: LinkEntity, status: 200 })
  delete(@Param() param: DeleteLinkDto) {
    return this.linksService.delete(param);
  }

  @Post()
  @ApiTags("link")
  @ApiResponse({ type: CreateLinkEntity, status: 200 })
  create(@Body() body: CreateLinkDto, @Headers("host") host: string) {
    return this.linksService.create(body, host);
  }
}
